package com.mealwrap.service.impl;

import com.mealwrap.common.Result;
import com.mealwrap.common.ResultEnum;
import com.mealwrap.service.RedisService;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service("redisService")
@SuppressWarnings("unchecked")
public class RedisServiceImpl implements RedisService {

    @Resource
    private StringRedisTemplate stringRedisTemplate;

    @Override
    public void flushDb() {
        stringRedisTemplate.execute((RedisCallback<Object>) connection -> {
            connection.flushDb();
            return "ok";
        });
    }

    @Override
    public Result<List<String>> getKeys() {
        Set<String> keys = stringRedisTemplate.keys("*");
        if (keys == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "redis:failed to obtain the key");
        }
        List<String> result = new ArrayList<>(keys);
        return Result.success(result);
    }

    @Override
    public Result<Void> insert(String key, String value) {
        if (key == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "redis:the key cannot be empty");
        }
        if (value == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "redis:the value cannot be empty");
        }
        stringRedisTemplate.opsForValue().set(key, value);
        return Result.success("redis:(K,V) inserted successfully");
    }

    @Override
    public Result<Void> notExist(String key) {
        if (key == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "redis:the key cannot be empty");
        }
        Boolean result = stringRedisTemplate.hasKey(key);
        if (result == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "redis:failed to find the key");
        }
        if (result) {
            return Result.error(ResultEnum.NOT_FOUND, "redis:the key already exists");
        }
        return Result.success("redis:the key is not found");
    }

    @Override
    public Result<Void> delete(String key) {
        if (key == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "redis:the key cannot be empty");
        }
        Boolean found = stringRedisTemplate.hasKey(key);
        if (found == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "redis:failed to find the key");
        }
        if (!found) {
            return Result.error(ResultEnum.NOT_FOUND, "redis:the key is not found");
        }
        Boolean result = stringRedisTemplate.delete(key);
        if (result == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "redis:failed to delete the key");
        }
        return Result.success("redis:the key is deleted successfully");
    }
}

