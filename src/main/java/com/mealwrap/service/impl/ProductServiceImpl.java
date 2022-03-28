package com.mealwrap.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.mealwrap.entity.Product;
import com.mealwrap.mapper.ProductMapper;
import com.mealwrap.service.ProductService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("productService")
public class ProductServiceImpl extends ServiceImpl<ProductMapper, Product> implements ProductService {
    @Resource
    private ProductMapper productMapper;
}
