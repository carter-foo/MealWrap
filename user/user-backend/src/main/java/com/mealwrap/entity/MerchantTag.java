package com.mealwrap.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("t_merchant_tag")
@JsonPropertyOrder({"merchantId", "tagName"})
public class MerchantTag implements Serializable {
    private static final long    serialVersionUID = 3567653491060394672L;
    private              Integer merchantId;
    private              String  tagName;
}
