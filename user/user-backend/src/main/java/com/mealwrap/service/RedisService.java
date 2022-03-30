package com.mealwrap.service;

import com.mealwrap.common.Result;

import java.util.List;

public interface RedisService {

    void flushDb();

    Result<List<String>> getKeys();

    Result<Void> insert(String key, String val);

    Result<Void> notExist(String key);

    Result<Void> delete(String key);
}

