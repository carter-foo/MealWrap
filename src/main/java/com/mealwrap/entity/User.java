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
@TableName("t_user")
@JsonPropertyOrder({"id", "phone", "password", "address", "createAt", "updateAt"})
public class User implements Serializable {
    private static final long          serialVersionUID = 3567653491060394677L;
    @TableId(type = IdType.AUTO)
    private              Integer       id;
    private              String        phone;
    private              String        password;
    private              String        address;
    @ApiModelProperty(dataType = "String", required = true, example = "2020-01-01 13:30:31")
    @TableField(fill = FieldFill.INSERT)
    private              LocalDateTime createAt;
    @ApiModelProperty(dataType = "String", required = true, example = "2020-01-01 13:30:31")
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateAt;
}
