package com.mealwrap.controller;

import cn.hutool.json.JSONUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mealwrap.common.ResultEnum;
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
class OrderControllerTest {

    private final String  baseUrl = "/api/v1/order";
    @Resource
    private       MockMvc mockMvc;

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
    void listByIdNull() throws Exception {
        String url = baseUrl + "/id";
        RequestBuilder request = MockMvcRequestBuilders.get(url)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        mockMvc.perform(request)
                .andExpect(status().is(400))
                .andReturn();
    }

    @Test
    void listByIdNotExist() throws Exception {
        String  url = baseUrl + "/id";
        Integer id  = -1;
        RequestBuilder request = MockMvcRequestBuilders.get(url)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .param("id", String.valueOf(id));
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("user id does not exist"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void listById() throws Exception {
        String  url = baseUrl + "/id";
        Integer id  = 1;
        RequestBuilder request = MockMvcRequestBuilders.get(url)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .param("id", String.valueOf(id));
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.SUCCESS.getCode()))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertNullArg() throws Exception {
        String url = baseUrl + "/insert";
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        mockMvc.perform(request)
                .andExpect(status().is(400))
                .andReturn();
    }

    @Test
    void insertNoUserId() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body does not contain 'userId'"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertUserIdNull() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", null);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("'userId' is null"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertUserIdTypeMismatched() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", "-1");
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("'userId' type mismatched"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertUserNotExist() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", -1);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("user does not exist"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertNoMerchantId() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body does not contain 'merchantId'"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertMerchantIdNull() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", null);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("'merchantId' is null"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertMerchantTypeMismatched() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", "-1");
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("'merchantId' type mismatched"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertMerchantNotExist() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", -1);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("merchant does not exist"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }


    @Test
    void insertNoAddress() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", 1);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body does not contain 'address'"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertAddressNull() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", 1);
        requestBody.put("address", null);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("'address' is null"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertAddressTypeMismatched() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", 1);
        requestBody.put("address", 1);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("'address' type mismatched"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }


    @Test
    void insertNoPhone() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", 1);
        requestBody.put("address", "address1");
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body does not contain 'phone'"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertPhoneNull() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", 1);
        requestBody.put("address", "address1");
        requestBody.put("phone", null);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("'phone' is null"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertPhoneTypeMismatched() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", 1);
        requestBody.put("address", "address1");
        requestBody.put("phone", 1);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("'phone' type mismatched"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertNoPaymentMethod() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", 1);
        requestBody.put("address", "address1");
        requestBody.put("phone", "6135550120");
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body does not contain 'paymentMethod'"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertPaymentMethodNull() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", 1);
        requestBody.put("address", "address1");
        requestBody.put("phone", "6135550120");
        requestBody.put("paymentMethod", null);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("'paymentMethod' is null"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertPaymentMethodTypeMismatched() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", 1);
        requestBody.put("address", "address1");
        requestBody.put("phone", "6135550120");
        requestBody.put("paymentMethod", "0");
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("'paymentMethod' type mismatched"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertNoDeliveryTime() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", 1);
        requestBody.put("address", "address1");
        requestBody.put("phone", "6135550120");
        requestBody.put("paymentMethod", 1);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("request body does not contain 'deliveryTime'"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertNullDeliveryTime() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", 1);
        requestBody.put("address", "address1");
        requestBody.put("phone", "6135550120");
        requestBody.put("paymentMethod", 1);
        requestBody.put("deliveryTime", null);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("'deliveryTime' is null"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }

    @Test
    void insertDeliveryTimeTypeMismatched() throws Exception {
        String              url         = baseUrl + "/insert";
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("userId", 1);
        requestBody.put("merchantId", 1);
        requestBody.put("address", "address1");
        requestBody.put("phone", "6135550120");
        requestBody.put("paymentMethod", 1);
        requestBody.put("deliveryTime", 1);
        RequestBuilder request = MockMvcRequestBuilders.post(url)
                .content(new ObjectMapper().writeValueAsString(requestBody))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(ResultEnum.BAD_REQUEST.getCode()))
                .andExpect(jsonPath("$.msg").value("'deliveryTime' type mismatched"))
                .andReturn();
        mvcResult.getResponse().setCharacterEncoding("UTF-8");
        System.out.print(JSONUtil.toJsonPrettyStr(mvcResult.getResponse().getContentAsString()));
    }
}