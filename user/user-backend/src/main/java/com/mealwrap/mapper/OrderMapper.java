package com.mealwrap.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.mealwrap.entity.Order;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderMapper extends BaseMapper<Order> {
}
