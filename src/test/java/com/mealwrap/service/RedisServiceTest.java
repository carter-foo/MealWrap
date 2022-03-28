package com.mealwrap.service;

import com.mealwrap.common.Result;
import com.mealwrap.common.ResultEnum;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
@Transactional
@Rollback
class RedisServiceTest {

    @Resource
    private RedisService redisService;

    @Test
    void getKeysTest() {
        redisService.insert("key1", "");
        redisService.insert("key2", "");
        redisService.insert("key3", "");
        redisService.insert("key4", "");
        Result<List<String>> result = redisService.getKeys();
        assertEquals(result.getCode(), ResultEnum.SUCCESS.getCode());
        result.getData().forEach(System.out::println);
    }

    @Test
    void insertTest() {
        Result<Void> result = redisService.insert("key1", "");
        assertEquals(result.getCode(), ResultEnum.SUCCESS.getCode());
        Result<Void> result1 = redisService.notExist("key2");
        assertEquals(result1.getCode(), ResultEnum.SUCCESS.getCode());
    }

    @Test
    void insertTest2() {
        Result<Void> result = redisService.insert("key1", "");
        assertEquals(result.getCode(), ResultEnum.SUCCESS.getCode());
        Result<Void> result1 = redisService.insert("key1", "");
        assertEquals(result1.getCode(), ResultEnum.SUCCESS.getCode());
    }

    @Test
    void deleteTest1() {
        Result<Void> result = redisService.delete("testtesttesttest");
        assertEquals(result.getCode(), ResultEnum.NOT_FOUND.getCode());
    }

    @Test
    void deleteTest2() {
        Result<Void> result = redisService.insert("testtesttesttestX", "");
        assertEquals(result.getCode(), ResultEnum.SUCCESS.getCode());
        Result<Void> result1 = redisService.delete("testtesttesttestX");
        assertEquals(result1.getCode(), ResultEnum.SUCCESS.getCode());
    }

    @AfterEach
    public void flushDb() {
        redisService.flushDb();
    }
}