package com.mealwrap.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.mealwrap.entity.MerchantTag;
import com.mealwrap.mapper.MerchantTagMapper;
import com.mealwrap.service.MerchantTagService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("merchantTagService")
public class MerchantTagServiceImpl extends ServiceImpl<MerchantTagMapper, MerchantTag> implements MerchantTagService {
    @Resource
    private MerchantTagMapper merchantTagMapper;
}
