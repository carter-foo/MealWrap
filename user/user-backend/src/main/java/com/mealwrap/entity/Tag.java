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
@TableName("t_tag")
@JsonPropertyOrder({"id", "name", "image"})
public class Tag implements Serializable {
    private static final long    serialVersionUID = 3567653491060394676L;
    @TableId(type = IdType.AUTO)
    private              Integer id;
    private              String  name;
    private              byte[]  image;
}
