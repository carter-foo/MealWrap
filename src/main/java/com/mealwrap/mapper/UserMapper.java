package com.mealwrap.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.mealwrap.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper extends BaseMapper<User> {
}
