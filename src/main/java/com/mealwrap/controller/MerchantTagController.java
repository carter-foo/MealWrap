package com.mealwrap.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.mealwrap.common.Result;
import com.mealwrap.common.ResultEnum;
import com.mealwrap.entity.Merchant;
import com.mealwrap.entity.MerchantTag;
import com.mealwrap.service.MerchantService;
import com.mealwrap.service.MerchantTagService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/merchanttag")
@Api(tags = "Merchant Tag Controller")
public class MerchantTagController {

    @Resource
    private MerchantTagService merchantTagService;

    @Resource
    private MerchantService merchantService;

    @ApiOperation("Get all merchants with the tag name without merchants' images")
    @GetMapping("/tagname")
    public Result<List<Map<String, Object>>> listByTagName(
            @RequestParam("tagName") @NotNull String tagName) {
        if (tagName == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "tag name is null");
        }
        /**
         * SELECT id,phone,password,name,description,address,rating,create_at,update_at FROM t_merchant WHERE
         * (id IN (select merchant_id from t_merchant_tag where tag_name = #{tagName}))
         */
        List<Object> idList =
                merchantTagService.listObjs(new LambdaQueryWrapper<MerchantTag>().select(MerchantTag::getMerchantId).eq(
                        MerchantTag::getTagName, tagName));
        if (idList == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "failed to obtain merchants with the given tag name");
        }
        List<Map<String, Object>> merchants = new ArrayList<>();
        if (!idList.isEmpty()) {
            merchants = merchantService.listMaps(new QueryWrapper<Merchant>().select(Merchant.class,
                    e -> !"image".equals(e.getColumn()))
                    .in("id", idList));
        }
        return Result.success(merchants);
    }
}
