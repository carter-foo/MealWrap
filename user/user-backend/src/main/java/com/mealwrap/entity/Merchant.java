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
@TableName("t_merchant")
@JsonPropertyOrder({"id", "phone", "password", "name", "description", "address", "rating", "createAt", "updateAt",
        "image"})
public class Merchant implements Serializable {
    private static final long          serialVersionUID = 3567653491060394671L;
    @TableId(type = IdType.AUTO)
    private              Integer       id;
    private              String        phone;
    private              String        password;
    private              String        name;
    private              String        description;
    private              String        address;
    private              Integer       rating;
    @ApiModelProperty(dataType = "String", required = true, example = "2020-01-01 13:30:31")
    @TableField(fill = FieldFill.INSERT)
    private              LocalDateTime createAt;
    @ApiModelProperty(dataType = "String", required = true, example = "2020-01-01 13:30:31")
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private              LocalDateTime updateAt;
    private              byte[]        image;
}
