package com.mealwrap.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.mealwrap.entity.Merchant;
import com.mealwrap.mapper.MerchantMapper;
import com.mealwrap.service.MerchantService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("merchantService")
public class MerchantServiceImpl extends ServiceImpl<MerchantMapper, Merchant> implements MerchantService {
    @Resource
    private MerchantMapper merchantMapper;
}
