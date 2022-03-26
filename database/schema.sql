SET NAMES utf8mb4;
SET foreign_key_checks = 0;

DROP TABLE IF EXISTS t_user;
CREATE TABLE t_user
(
    `id`        INT AUTO_INCREMENT NOT NULL,
    `phone`     VARCHAR(20)        NOT NULL,
    `password`  VARCHAR(128)       NOT NULL COMMENT 'encrypted password',
    `address`   VARCHAR(256)       NULL,
    `create_at` DATETIME           NULL,
    `update_at` DATETIME           NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `phone` (`phone`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT ='User';

DROP TABLE IF EXISTS t_merchant;
CREATE TABLE t_merchant
(
    `id`          INT AUTO_INCREMENT NOT NULL,
    `phone`       VARCHAR(20)        NOT NULL,
    `password`    VARCHAR(128)       NOT NULL COMMENT 'encrypted password',
    `name`        VARCHAR(128)       NULL,
    `description` VARCHAR(512)       NULL,
    `address`     VARCHAR(256)       NULL,
    `rating`      INT                     DEFAULT 0, /** rating from 0 to 10 **/
    `create_at`   DATETIME           NULL,
    `update_at`   DATETIME           NULL,
    `image`       LONGBLOB           NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `phone` (`phone`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT ='Merchant';

DROP TABLE IF EXISTS t_product;
CREATE TABLE t_product
(
    `id`          INT AUTO_INCREMENT NOT NULL,
    `merchant_id` INT                NOT NULL,
    `name`        VARCHAR(64)        NULL,
    `price`       DOUBLE             NULL,
    `percent_off` INT                NULL,
    `description` VARCHAR(512)       NULL,
    `image`       LONGBLOB           NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY (`merchant_id`, `name`) /** each product of one merchant has a unique name **/
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT ='Product';

DROP TABLE IF EXISTS t_tag;
CREATE TABLE t_tag
(
    `id`    INT AUTO_INCREMENT NOT NULL,
    `name`  VARCHAR(64) NOT NULL,
    `image` LONGBLOB NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY (`name`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT ='Tag';

DROP TABLE IF EXISTS t_merchant_tag;
CREATE TABLE t_merchant_tag
(
    `merchant_id` INT         NOT NULL,
    `tag_name`    VARCHAR(32) NOT NULL,
    PRIMARY KEY (`merchant_id`, `tag_name`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT ='Merchant To Tag';

DROP TABLE IF EXISTS t_shopping_cart;
CREATE TABLE t_shopping_cart
(
    `user_id`    INT NOT NULL,
    `product_id` INT NOT NULL,
    `quantity`   INT NOT NULL DEFAULT 1,
    PRIMARY KEY (`user_id`, `product_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT ='Shopping Cart';

DROP TABLE IF EXISTS t_order;
CREATE TABLE t_order
(
    `id`              INT AUTO_INCREMENT NOT NULL,
    `user_id`         INT NOT NULL, /** buyer id **/
    `merchant_id`     INT NOT NULL,
    `address`         VARCHAR(256) NULL,
    `phone`           VARCHAR(20) NULL,
    `payment_method`  INT NULL, /** 0 1 2 **/
    `delivery_time`   DATETIME NULL,
    `delivery_method` INT NULL, /** 0 1 2 **/
    `total_price`     DOUBLE NULL,
    `delivery_fee`    DOUBLE NULL,
    `tax`             DOUBLE NULL,
    `tip`             DOUBLE NULL,
    `comment`         VARCHAR(512) NULL,
    `create_at`       DATETIME NULL,
    `update_at`       DATETIME NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT ='Order';