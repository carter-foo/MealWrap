package com.mealwrap.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.mealwrap.common.Result;
import com.mealwrap.common.ResultEnum;
import com.mealwrap.entity.Tag;
import com.mealwrap.service.TagService;
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
@RequestMapping("api/v1/tag")
@Api(tags = "Tag Controller")
public class TagController {

    @Resource
    TagService tagService;

    @ApiOperation("List all tag without images")
    @GetMapping("/all")
    public Result<List<Map<String, Object>>> listWithoutImages() {
        QueryWrapper<Tag> queryWrapper = new QueryWrapper<Tag>().select(Tag.class,
                e -> !"image".equals(e.getColumn()));
        List<Map<String, Object>> tags = tagService.listMaps(queryWrapper);
        if (tags == null) {
            return Result.error(ResultEnum.BAD_REQUEST);
        }
        return Result.success(tags);
    }

    @ApiOperation("Get image of a tag")
    @GetMapping("/image")
    public ResponseEntity<byte[]> getImage(
            @RequestParam("id") @NotNull Integer id) {
        if (id == null) {
            return new ResponseEntity<>(null, null, HttpStatus.BAD_REQUEST);
        }
        Tag tag = tagService.getById(id);
        if (tag == null) {
            return new ResponseEntity<>(null, null, HttpStatus.BAD_REQUEST);
        }
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.IMAGE_JPEG);
        return new ResponseEntity<>(tag.getImage(), httpHeaders, HttpStatus.OK);
    }

    @ApiOperation("Upload an image of a tag")
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
        Tag tag = tagService.getById(id);
        if (tag == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "tag cannot be found");
        }
        try {
            byte[] bytes = file.getBytes();
            tag.setImage(bytes);
            if (!tagService.updateById(tag)) {
                return Result.error(ResultEnum.BAD_REQUEST, "failed to insert the image");
            }
            return Result.success("file uploaded successfully");
        } catch (Exception e) {
            return Result.error(ResultEnum.BAD_REQUEST, e.getMessage());
        }
    }
}
