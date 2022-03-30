package com.mealwrap.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.mealwrap.common.Result;
import com.mealwrap.common.ResultEnum;
import com.mealwrap.entity.Merchant;
import com.mealwrap.service.MerchantService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/merchant")
@Api(tags = "Merchant Controller")
public class MerchantController {
    @Resource
    private MerchantService merchantService;

    @ApiOperation("List all merchants without images")
    @GetMapping("/all")
    public Result<List<Map<String, Object>>> listWithoutImages() {
        QueryWrapper<Merchant> queryWrapper = new QueryWrapper<Merchant>().select(Merchant.class,
                e -> !"image".equals(e.getColumn()));
        List<Map<String, Object>> merchants = merchantService.listMaps(queryWrapper);
        if (merchants == null) {
            return Result.error(ResultEnum.BAD_REQUEST);
        }
        return Result.success(merchants);
    }

    @ApiOperation("Get a merchant without its image")
    @GetMapping("/id")
    public Result<Map<String, Object>> getAMerchantWithoutImage(@RequestParam("id") @NotNull Integer id) {
        if (id == null) {
            return Result.error(ResultEnum.BAD_REQUEST);
        }
        QueryWrapper<Merchant> queryWrapper = new QueryWrapper<Merchant>().select(Merchant.class,
                e -> !"image".equals(e.getColumn())).eq("id", id);
        Map<String, Object> merchant = merchantService.getMap(queryWrapper);
        if (merchant == null) {
            return Result.error(ResultEnum.BAD_REQUEST);
        }
        return Result.success(merchant);
    }

    @ApiOperation("Get image of a merchant")
    @GetMapping("/image")
    public ResponseEntity<byte[]> getImage(
            @RequestParam("id") @NotNull Integer id) {
        if (id == null) {
            return new ResponseEntity<>(null, null, HttpStatus.BAD_REQUEST);
        }
        Merchant merchant = merchantService.getById(id);
        if (merchant == null) {
            return new ResponseEntity<>(null, null, HttpStatus.BAD_REQUEST);
        }
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.IMAGE_JPEG);
        return new ResponseEntity<>(merchant.getImage(), httpHeaders, HttpStatus.OK);
    }

    @ApiOperation("Upload an image of a merchant")
    @PostMapping(value = "/upload")
    public Result<Void> upload(
            @RequestParam("id") @NotNull Integer id,
            @RequestPart("file") @NotNull MultipartFile file) {
        if (id == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "id is null");
        }
        if (file == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "upload file is null");
        }
        Merchant merchant = merchantService.getById(id);
        if (merchant == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "merchant cannot be found");
        }
        try {
            byte[] bytes = file.getBytes();
            merchant.setImage(bytes);
            if (!merchantService.updateById(merchant)) {
                return Result.error(ResultEnum.BAD_REQUEST, "failed to insert the image");
            }
            return Result.success("file uploaded successfully");
        } catch (Exception e) {
            return Result.error(ResultEnum.BAD_REQUEST, e.getMessage());
        }
    }
}
