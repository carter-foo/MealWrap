package com.mealwrap.common;

public enum ResultEnum {

    SUCCESS(200),
    BAD_REQUEST(400),
    NOT_FOUND(404);

    private final Integer code;

    ResultEnum(int code) {
        this.code = code;
    }

    public static String getMsg(ResultEnum code) {
        switch (code) {
            case SUCCESS:
                return "OK";
            case BAD_REQUEST:
                return "BAD REQUEST";
            case NOT_FOUND:
                return "NOT FOUND";
            default:
                return "";
        }
    }

    public int getCode() {
        return code;
    }
}
