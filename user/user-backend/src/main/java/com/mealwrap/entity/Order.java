package com.mealwrap.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("t_order")
@JsonPropertyOrder({"id", "userId", "merchantId", "address", "phone", "paymentMethod", "deliveryTime", "deliveryMethod", "totalPrice", "deliveryFee", "tax", "tip", "comment", "createAt", "updateAt"})
public class Order implements Serializable {
    private static final long          serialVersionUID = 3567653491060394673L;
    @TableId(type = IdType.AUTO)
    private              Integer       id;
    private              Integer       userId;
    private              Integer       merchantId;
    private              String        address;
    private              String        phone;
    private              Integer       paymentMethod;
    @ApiModelProperty(dataType = "String", required = true, example = "2020-01-01 13:30:31")
    private              LocalDateTime deliveryTime;
    private              Integer       deliveryMethod;
    private Double        totalPrice;
    private Double        deliveryFee;
    private Double        tax;
    private Double        tip;
    private String        comment;
    @ApiModelProperty(dataType = "String", required = true, example = "2020-01-01 13:30:31")
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createAt;
    @ApiModelProperty(dataType = "String", required = true, example = "2020-01-01 13:30:31")
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateAt;
}
