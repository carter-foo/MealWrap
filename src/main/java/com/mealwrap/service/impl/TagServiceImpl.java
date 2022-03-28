package com.mealwrap.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.mealwrap.entity.Tag;
import com.mealwrap.mapper.TagMapper;
import com.mealwrap.service.TagService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("tagService")
public class TagServiceImpl extends ServiceImpl<TagMapper, Tag> implements TagService {
    @Resource
    private TagMapper tagMapper;
}

