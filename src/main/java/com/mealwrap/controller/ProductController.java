package com.mealwrap.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.mealwrap.common.Result;
import com.mealwrap.common.ResultEnum;
import com.mealwrap.entity.Merchant;
import com.mealwrap.entity.Product;
import com.mealwrap.service.MerchantService;
import com.mealwrap.service.ProductService;
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
@RequestMapping("api/v1/product")
@Api(tags = "Product Controller")
public class ProductController {
    @Resource
    private ProductService  productService;
    @Resource
    private MerchantService merchantService;

    @ApiOperation("List all products of a merchant without images by giving merchant id")
    @GetMapping("/merchant_id")
    public Result<List<Map<String, Object>>> listByMerchantId(
            @RequestParam Integer merchantId) {
        if (merchantId == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "merchant id is null");
        }
        Merchant merchant = merchantService.getById(merchantId);
        if (merchant == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "merchant id does not exist");
        }
        QueryWrapper<Product> queryWrapper = new QueryWrapper<Product>().select(Product.class,
                e -> !"image".equals(e.getColumn()))
                .eq("merchant_id", merchantId);
        List<Map<String, Object>> products = productService.listMaps(queryWrapper);
        if (products == null) {
            return Result.error(ResultEnum.BAD_REQUEST);
        }
        return Result.success(products);
    }

    @ApiOperation("List all products without images")
    @GetMapping("/all")
    public Result<List<Map<String, Object>>> list() {
        QueryWrapper<Product> queryWrapper = new QueryWrapper<Product>().select(Product.class,
                e -> !"image".equals(e.getColumn()));
        List<Map<String, Object>> products = productService.listMaps(queryWrapper);
        if (products == null) {
            return Result.error(ResultEnum.BAD_REQUEST);
        }
        return Result.success(products);
    }

    @ApiOperation("Get an image of a product")
    @GetMapping(value = "/image")
    public ResponseEntity<byte[]> getImage(
            @RequestParam("id") @NotNull Integer id) {
        if (id == null) {
            return new ResponseEntity<>(null, null, HttpStatus.BAD_REQUEST);
        }
        Product product = productService.getById(id);
        if (product == null) {
            return new ResponseEntity<>(null, null, HttpStatus.BAD_REQUEST);
        }
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.IMAGE_JPEG);
        return new ResponseEntity<>(product.getImage(), httpHeaders, HttpStatus.OK);
    }

    @ApiOperation("Upload an image of a product")
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
        Product product = productService.getById(id);
        if (product == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "product cannot be found");
        }
        try {
            byte[] bytes = file.getBytes();
            product.setImage(bytes);
            if (!productService.updateById(product)) {
                return Result.error(ResultEnum.BAD_REQUEST, "failed to insert the image");
            }
            return Result.success("file uploaded successfully");
        } catch (Exception e) {
            return Result.error(ResultEnum.BAD_REQUEST, e.getMessage());
        }
    }
}
