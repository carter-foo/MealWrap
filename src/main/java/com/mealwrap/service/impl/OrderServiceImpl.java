package com.mealwrap.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.mealwrap.entity.Order;
import com.mealwrap.mapper.OrderMapper;
import com.mealwrap.service.OrderService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("orderService")
public class OrderServiceImpl extends ServiceImpl<OrderMapper, Order> implements OrderService {
    @Resource
    private OrderMapper orderMapper;
}
