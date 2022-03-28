package com.mealwrap.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("t_product")
@JsonPropertyOrder({"id", "merchantId", "name", "price", "percentOff", "description", "image"})
public class Product implements Serializable {
    private static final long    serialVersionUID = 3567653491060394674L;
    @TableId(type = IdType.AUTO)
    private              Integer id;
    private              Integer merchantId;
    private              String  name;
    private              Double  price;
    private              Integer percentOff;
    private              String  description;
    private              byte[]  image;
}
