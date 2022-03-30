package com.mealwrap.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result<T> implements Serializable {

    private Integer code;
    private String  msg;
    private T       data;

    public static <T> Result<T> success(T data) {
        return new Result<>(ResultEnum.SUCCESS.getCode(), ResultEnum.getMsg(ResultEnum.SUCCESS), data);
    }

    public static <T> Result<T> success(T data, String msg) {
        return new Result<>(ResultEnum.SUCCESS.getCode(), msg, data);
    }

    public static <T> Result<T> success() {
        return new Result<>(ResultEnum.SUCCESS.getCode(), ResultEnum.getMsg(ResultEnum.SUCCESS), null);
    }

    public static <T> Result<T> success(String msg) {
        return new Result<>(ResultEnum.SUCCESS.getCode(), msg, null);
    }

    public static <T> Result<T> error(ResultEnum resultEnum) {
        return new Result<>(resultEnum.getCode(), ResultEnum.getMsg(resultEnum), null);
    }

    public static <T> Result<T> error(ResultEnum resultEnum, String msg) {
        return new Result<>(resultEnum.getCode(), msg, null);
    }
}