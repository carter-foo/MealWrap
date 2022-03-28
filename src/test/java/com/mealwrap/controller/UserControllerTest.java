package com.mealwrap.controller;

import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mealwrap.common.JwtUtils;
import com.mealwrap.common.ResultEnum;
import com.mealwrap.entity.User;
import com.mealwrap.service.RedisService;
import com.mealwrap.service.UserService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
@Transactional
@Rollback
class UserControllerTest {

    private final String       baseUrl = "/api/v1/user";
    @Resource
    private       MockMvc      mockMvc;
    @Resource
    private       RedisService redisService;
    @Resource
    private       UserService  userService;

    @Test
    void list() throws Exception {
        String url = baseUrl + "/all";
        RequestBuilder request = MockMvcRequestBuilders.get(url)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.SUCCESS.getCode()))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void loginNoArgs() throws Exception {
        String url = baseUrl + "/login";
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        mockMvc.perform(request)
                .andExpect(status().is(400))
                .andReturn();
    }

    @Test
    void loginNoPhone() throws Exception {
        String              url         = baseUrl + "/login";
        Map<String, Object> requestBody = new HashMap<>();
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body:phone cannot be found"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void loginNullPhone() throws Exception {
        String              url         = baseUrl + "/login";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("phone", null);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body:phone is null"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void loginPhoneTypeMismatched() throws Exception {
        String              url         = baseUrl + "/login";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("phone", 1);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body:phone type mismatched"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void loginNoPassword() throws Exception {
        String              url         = baseUrl + "/login";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("phone", "6135550143");
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body:password cannot be found"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void loginNullPassword() throws Exception {
        String              url         = baseUrl + "/login";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("phone", "6135550143");
        requestBody.put("password", null);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body:password is null"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void loginPasswordTypeMismatched() throws Exception {
        String              url         = baseUrl + "/login";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("phone", "6135550143");
        requestBody.put("password", 1);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body:password type mismatched"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void loginPhoneNotFound() throws Exception {
        String              url         = baseUrl + "/login";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("phone", "1");
        requestBody.put("password", "password");
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("phone cannot be found"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void loginPasswordNotMatched() throws Exception {
        String              url         = baseUrl + "/login";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("phone", "6135550143");
        requestBody.put("password", "1");
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("password not matched"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void login() throws Exception {
        String              url         = baseUrl + "/login";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("phone", "6135550143");
        requestBody.put("password", "password");
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.SUCCESS.getCode()))
                .andExpect(jsonPath("$.msg").value("user successfully logged in"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void logoutNoArgs() throws Exception {
        String url = baseUrl + "/logout";
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        mockMvc.perform(request)
                .andExpect(status().is(400))
                .andReturn();
    }

    @Test
    void logoutNoToken() throws Exception {
        String              url         = baseUrl + "/logout";
        Map<String, Object> requestBody = new HashMap<>();
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body:token cannot be found"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void logoutNullToken() throws Exception {
        String              url         = baseUrl + "/logout";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("token", null);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body:token is null"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void logoutTokenTypeMismatched() throws Exception {
        String              url         = baseUrl + "/logout";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("token", 1);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body:token type mismatched"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void logoutTokenNotExist() throws Exception {
        String              url         = baseUrl + "/logout";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("token", "testtest");
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("token does not exist in redis"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void logout() throws Exception {
        // login
        String token;
        {
            String              url         = baseUrl + "/login";
            Map<String, Object> requestBody = new HashMap<>();
            requestBody.put("phone", "6135550143");
            requestBody.put("password", "password");
            RequestBuilder request = MockMvcRequestBuilders.post(url)
                    .content(new ObjectMapper().writeValueAsString(requestBody))
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON);
            mockMvc.perform(request)
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.code").value(ResultEnum.SUCCESS.getCode()))
                    .andExpect(jsonPath("$.msg").value("user successfully logged in"))
                    .andReturn();
            User user = userService.getOne(new QueryWrapper<User>().eq("phone", "6135550143"));
            token = JwtUtils.getToken(user.getId());
        }
        // logout
        String              url         = baseUrl + "/logout";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("token", token);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.SUCCESS.getCode()))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }


    @AfterEach
    public void flushDb() {
        redisService.flushDb();
    }
}