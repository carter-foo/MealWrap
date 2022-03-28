package com.mealwrap.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.mealwrap.common.JwtUtils;
import com.mealwrap.common.Result;
import com.mealwrap.common.ResultEnum;
import com.mealwrap.entity.User;
import com.mealwrap.service.RedisService;
import com.mealwrap.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("api/v1/user")
@Api(tags = "User Controller")
public class UserController {

    @Resource
    private UserService userService;

    @Resource
    private RedisService redisService;

    @ApiOperation("Login with phone and password and return a token")
    @PostMapping("/login")
    public Result<String> login(@RequestBody HashMap<String, Object> requestBody) {
        if (requestBody == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body is null");
        }
        if (!requestBody.containsKey("phone")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body:phone cannot be found");
        }
        if (requestBody.get("phone") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body:phone is null");
        }
        if (!((requestBody.get("phone")) instanceof String)) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body:phone type mismatched");
        }

        if (!requestBody.containsKey("password")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body:password cannot be found");
        }
        if (requestBody.get("password") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body:password is null");
        }
        if (!((requestBody.get("password")) instanceof String)) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body:password type mismatched");
        }

        String phone = (String) requestBody.get("phone");
        User   user  = userService.getOne(new QueryWrapper<User>().eq("phone", phone));
        if (user == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "phone cannot be found");
        }
        String rawPassword = (String) requestBody.get("password");
        if (!new BCryptPasswordEncoder().matches(rawPassword, user.getPassword())) {
            return Result.error(ResultEnum.BAD_REQUEST, "password not matched");
        }
        // generate the token by the user ID
        String token;
        try {
            token = JwtUtils.getToken(user.getId());
        } catch (Exception e) {
            return Result.error(ResultEnum.BAD_REQUEST, "failed to generate the token: " + e.getMessage());
        }
        if (token == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "failed to generate the token");
        }
        // insert the token to redis
        Result<Void> insertToken = redisService.insert(token, "");
        if (!insertToken.getCode().equals(ResultEnum.SUCCESS.getCode())) {
            return Result.error(ResultEnum.BAD_REQUEST, "failed to insert the token to redis");
        }
        return Result.success(token, "user successfully logged in");
    }

    @ApiOperation("Logout with token")
    @PostMapping("/logout")
    public Result<Void> logout(@RequestBody HashMap<String, Object> requestBody) {
        if (requestBody == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body is null");
        }
        if (!requestBody.containsKey("token")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body:token cannot be found");
        }
        if (requestBody.get("token") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body:token is null");
        }
        if (!((requestBody.get("token")) instanceof String)) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body:token type mismatched");
        }
        String       token         = (String) requestBody.get("token");
        Result<Void> tokenNotExist = redisService.notExist(token);
        if (tokenNotExist.getCode().equals(ResultEnum.SUCCESS.getCode())) {
            return Result.error(ResultEnum.BAD_REQUEST, "token does not exist in redis");
        }
        Result<Void> deleteToken = redisService.delete(token);
        if (!deleteToken.getCode().equals(ResultEnum.SUCCESS.getCode())) {
            return Result.error(ResultEnum.BAD_REQUEST, "failed to delete the token in redis");
        }
        return Result.success();
    }

    @ApiOperation("List all users")
    @GetMapping("/all")
    public Result<List<User>> list() {
        List<User> users = userService.list();
        if (users == null) {
            return Result.error(ResultEnum.BAD_REQUEST);
        }
        return Result.success(users);
    }
}
