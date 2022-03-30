package com.mealwrap.controller;

import com.mealwrap.common.Result;
import com.mealwrap.common.ResultEnum;
import com.mealwrap.entity.Merchant;
import com.mealwrap.entity.Order;
import com.mealwrap.entity.User;
import com.mealwrap.service.MerchantService;
import com.mealwrap.service.OrderService;
import com.mealwrap.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/order")
@Api(tags = "Order Controller")
public class OrderController {

    @Resource
    private OrderService orderService;

    @Resource
    private UserService userService;

    @Resource
    private MerchantService merchantService;

    @ApiOperation("List all orders")
    @GetMapping("/all")
    public Result<List<Order>> list() {
        List<Order> orders = orderService.list();
        if (orders == null) {
            return Result.error(ResultEnum.BAD_REQUEST);
        }
        return Result.success(orders);
    }

    @ApiOperation("List all orders of a user")
    @GetMapping("/id")
    public Result<List<Order>> listById(
            @RequestParam("id") @NotNull Integer id) {
        if (id == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "id is null");
        }
        User user = userService.getById(id);
        if (user == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "user id does not exist");
        }
        Map<String, Object> args = new HashMap<>();
        args.put("user_id", id);
        try {
            List<Order> orders = orderService.listByMap(args);
            if (orders == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "failed to obtain orders of the user");
            }
            return Result.success(orders);
        } catch (Exception e) {
            return Result.error(ResultEnum.BAD_REQUEST, e.getMessage());
        }
    }

    @ApiOperation("Insert an order")
    @PostMapping("/insert")
    public Result<Order> insert(
            @RequestBody @NotNull Map<String, Object> requestBody) {
        if (requestBody == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body is null");
        }

        if (!requestBody.containsKey("userId")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'userId'");
        }
        if (requestBody.get("userId") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'userId' is null");
        }
        if (!(requestBody.get("userId") instanceof Integer)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'userId' type mismatched");
        }
        Integer userId = (Integer) requestBody.get("userId");
        User    user   = userService.getById(userId);
        if (user == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "user does not exist");
        }

        if (!requestBody.containsKey("merchantId")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'merchantId'");
        }
        if (requestBody.get("merchantId") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'merchantId' is null");
        }
        if (!(requestBody.get("merchantId") instanceof Integer)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'merchantId' type mismatched");
        }
        Integer  merchantId = (Integer) requestBody.get("merchantId");
        Merchant merchant   = merchantService.getById(merchantId);
        if (merchant == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "merchant does not exist");
        }

        if (!requestBody.containsKey("address")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'address'");
        }
        if (requestBody.get("address") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'address' is null");
        }
        if (!(requestBody.get("address") instanceof String)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'address' type mismatched");
        }

        if (!requestBody.containsKey("phone")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'phone'");
        }
        if (requestBody.get("phone") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'phone' is null");
        }
        if (!(requestBody.get("phone") instanceof String)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'phone' type mismatched");
        }

        if (!requestBody.containsKey("paymentMethod")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'paymentMethod'");
        }
        if (requestBody.get("paymentMethod") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'paymentMethod' is null");
        }
        if (!(requestBody.get("paymentMethod") instanceof Integer)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'paymentMethod' type mismatched");
        }

        if (!requestBody.containsKey("deliveryTime")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'deliveryTime'");
        }
        if (requestBody.get("deliveryTime") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'deliveryTime' is null");
        }
        if (!(requestBody.get("deliveryTime") instanceof String)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'deliveryTime' type mismatched");
        }

        if (!requestBody.containsKey("deliveryMethod")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'deliveryMethod'");
        }
        if (requestBody.get("deliveryMethod") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'deliveryMethod' is null");
        }
        if (!(requestBody.get("deliveryMethod") instanceof Integer)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'deliveryMethod' type mismatched");
        }

        if (!requestBody.containsKey("totalPrice")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'totalPrice'");
        }
        if (requestBody.get("totalPrice") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'totalPrice' is null");
        }
        if (!(requestBody.get("totalPrice") instanceof Double)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'totalPrice' type mismatched");
        }

        if (!requestBody.containsKey("deliveryFee")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'deliveryFee'");
        }
        if (requestBody.get("deliveryFee") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'deliveryFee' is null");
        }
        if (!(requestBody.get("deliveryFee") instanceof Double)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'deliveryFee' type mismatched");
        }

        if (!requestBody.containsKey("tax")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'tax'");
        }
        if (requestBody.get("tax") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'tax' is null");
        }
        if (!(requestBody.get("tax") instanceof Double)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'tax' type mismatched");
        }

        if (!requestBody.containsKey("tip")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'tip'");
        }
        if (requestBody.get("tip") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'tip' is null");
        }
        if (!(requestBody.get("tip") instanceof Double)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'tip' type mismatched");
        }

        if (!requestBody.containsKey("comment")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'comment'");
        }
        if (requestBody.get("comment") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'comment' is null");
        }
        if (!(requestBody.get("comment") instanceof String)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'comment' type mismatched");
        }

        try {
            final DateTimeFormatter formatter    = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            LocalDateTime           deliveryTime = LocalDateTime.parse((String) requestBody.get("deliveryTime"), formatter);
            Order                   order        = new Order();
            order.setUserId(userId);
            order.setMerchantId(merchantId);
            order.setAddress((String) requestBody.get("address"));
            order.setPhone((String) requestBody.get("phone"));
            order.setPaymentMethod((Integer) requestBody.get("paymentMethod"));
            order.setDeliveryTime(deliveryTime);
            order.setDeliveryMethod((Integer) requestBody.get("deliveryMethod"));
            order.setTotalPrice((Double) requestBody.get("totalPrice"));
            order.setDeliveryFee((Double) requestBody.get("deliveryFee"));
            order.setTax((Double) requestBody.get("tax"));
            order.setTip((Double) requestBody.get("tip"));
            order.setComment((String) requestBody.get("comment"));
            if (!orderService.save(order)) {
                return Result.error(ResultEnum.BAD_REQUEST, "failed to insert the order");
            }
            return Result.success(order);
        } catch (Exception e) {
            return Result.error(ResultEnum.BAD_REQUEST, e.getMessage());
        }
    }

    @ApiOperation("Update an order")
    @PostMapping("/update")
    public Result<Order> update(
            @RequestBody @NotNull Map<String, Object> requestBody) {
        if (requestBody == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body is null");
        }
        // Order ID must be given
        if (!requestBody.containsKey("id")) {
            return Result.error(ResultEnum.BAD_REQUEST, "request body does not contain 'id'");
        }
        if (requestBody.get("id") == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "'id' is null");
        }
        if (!(requestBody.get("id") instanceof Integer)) {
            return Result.error(ResultEnum.BAD_REQUEST, "'id' type mismatched");
        }
        Integer id    = (Integer) requestBody.get("id");
        Order   order = orderService.getById(id);
        if (order == null) {
            return Result.error(ResultEnum.BAD_REQUEST, "order does not exist");
        }
        // Update fields
        if (requestBody.containsKey("userId")) {
            if (requestBody.get("userId") == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "'userId' is null");
            }
            if (!(requestBody.get("userId") instanceof Integer)) {
                return Result.error(ResultEnum.BAD_REQUEST, "'userId' type mismatched");
            }
            Integer userId = (Integer) requestBody.get("userId");
            if (userService.getById(userId) == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "user does not exist");
            }
            order.setUserId(userId);
        }
        if (requestBody.containsKey("merchantId")) {
            if (requestBody.get("merchantId") == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "'merchantId' is null");
            }
            if (!(requestBody.get("merchantId") instanceof Integer)) {
                return Result.error(ResultEnum.BAD_REQUEST, "'merchantId' type mismatched");
            }
            Integer merchantId = (Integer) requestBody.get("merchantId");
            if (merchantService.getById(merchantId) == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "merchant does not exist");
            }
            order.setMerchantId(merchantId);
        }
        if (requestBody.containsKey("address")) {
            if (requestBody.get("address") == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "'address' is null");
            }
            if (!(requestBody.get("address") instanceof String)) {
                return Result.error(ResultEnum.BAD_REQUEST, "'address' type mismatched");
            }
            order.setAddress((String) requestBody.get("address"));
        }
        if (requestBody.containsKey("phone")) {
            if (requestBody.get("phone") == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "'phone' is null");
            }
            if (!(requestBody.get("phone") instanceof String)) {
                return Result.error(ResultEnum.BAD_REQUEST, "'phone' type mismatched");
            }
            order.setPhone((String) requestBody.get("phone"));
        }
        if (requestBody.containsKey("paymentMethod")) {
            if (requestBody.get("paymentMethod") == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "'paymentMethod' is null");
            }
            if (!(requestBody.get("paymentMethod") instanceof Integer)) {
                return Result.error(ResultEnum.BAD_REQUEST, "'phone' type mismatched");
            }
            order.setPaymentMethod((Integer) requestBody.get("paymentMethod"));
        }
        if (requestBody.containsKey("deliveryTime")) {
            if (requestBody.get("deliveryTime") == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "'deliveryTime' is null");
            }
            if (!(requestBody.get("deliveryTime") instanceof String)) {
                return Result.error(ResultEnum.BAD_REQUEST, "'deliveryTime' type mismatched");
            }
            try {
                final DateTimeFormatter formatter    = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
                LocalDateTime           deliveryTime = LocalDateTime.parse((String) requestBody.get("deliveryTime"), formatter);
                order.setDeliveryTime(deliveryTime);
            } catch (Exception e) {
                return Result.error(ResultEnum.BAD_REQUEST, e.getMessage());
            }
        }
        if (requestBody.containsKey("deliveryMethod")) {
            if (requestBody.get("deliveryMethod") == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "'deliveryMethod' is null");
            }
            if (!(requestBody.get("deliveryMethod") instanceof Integer)) {
                return Result.error(ResultEnum.BAD_REQUEST, "'deliveryMethod' type mismatched");
            }
            order.setDeliveryMethod((Integer) requestBody.get("deliveryMethod"));
        }
        if (requestBody.containsKey("totalPrice")) {
            if (requestBody.get("totalPrice") == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "'totalPrice' is null");
            }
            if (!(requestBody.get("totalPrice") instanceof Double)) {
                return Result.error(ResultEnum.BAD_REQUEST, "'totalPrice' type mismatched");
            }
            order.setTotalPrice((Double) requestBody.get("totalPrice"));
        }
        if (requestBody.containsKey("deliveryFee")) {
            if (requestBody.get("deliveryFee") == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "'deliveryFee' is null");
            }
            if (!(requestBody.get("deliveryFee") instanceof Double)) {
                return Result.error(ResultEnum.BAD_REQUEST, "'deliveryFee' type mismatched");
            }
            order.setDeliveryFee((Double) requestBody.get("deliveryFee"));
        }
        if (requestBody.containsKey("tax")) {
            if (requestBody.get("tax") == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "'tax' is null");
            }
            if (!(requestBody.get("tax") instanceof Double)) {
                return Result.error(ResultEnum.BAD_REQUEST, "'tax' type mismatched");
            }
            order.setTax((Double) requestBody.get("tax"));
        }
        if (requestBody.containsKey("tip")) {
            if (requestBody.get("tip") == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "'tip' is null");
            }
            if (!(requestBody.get("tip") instanceof Double)) {
                return Result.error(ResultEnum.BAD_REQUEST, "'tip' type mismatched");
            }
            order.setTip((Double) requestBody.get("tip"));
        }
        if (requestBody.containsKey("comment")) {
            if (requestBody.get("comment") == null) {
                return Result.error(ResultEnum.BAD_REQUEST, "'comment' is null");
            }
            if (!(requestBody.get("comment") instanceof String)) {
                return Result.error(ResultEnum.BAD_REQUEST, "'comment' type mismatched");
            }
            order.setComment((String) requestBody.get("comment"));
        }
        order.setUpdateAt(null);
        try {
            if (!orderService.updateById(order)) {
                return Result.error(ResultEnum.BAD_REQUEST, "failed to update the order");
            }
            return Result.success(order);
        } catch (Exception e) {
            return Result.error(ResultEnum.BAD_REQUEST, e.getMessage());
        }
    }
}
