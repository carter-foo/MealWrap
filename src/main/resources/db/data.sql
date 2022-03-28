DELETE
FROM t_user;
INSERT INTO t_user (phone, password, address, create_at, update_at)
VALUES ('6135550143', '$2a$10$lwhSaNuNaLJxn48HKK1KDeHzREy6jv3qikRIrIBOozoyJJqIQvVt2', 'address1', NOW(),
        NOW()), /* password */
       ('6135550195', '$2a$10$TQXPTpDTsWcEHXPBWtj0L.RjEkbqtWfvG6gRpbMJ1XY8kSqi5htPu', 'address2', NOW(),
        NOW()),
       ('6135550119', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address3', NOW(),
        NOW()),
       ('6135550101', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address3', NOW(),
        NOW()),
       ('6135550110', '$2a$10$evSlP2n2KXsCYXEFs6bDHuunG4UpDA2rNaPffakR4TPF6vnpIkoBK', 'address4', NOW(),
        NOW()),
       ('6135550106', '$2a$10$evSlP2n2KXsCYXEFs6bDHuunG4UpDA2rNaPffakR4TPF6vnpIkoBK', 'address5', NOW(),
        NOW()),
       ('6135550102', '$2a$10$evSlP2n2KXsCYXEFs6bDHuunG4UpDA2rNaPffakR4TPF6vnpIkoBK', 'address6', NOW(),
        NOW()),
       ('6135550190', '$2a$10$evSlP2n2KXsCYXEFs6bDHuunG4UpDA2rNaPffakR4TPF6vnpIkoBK', 'address7', NOW(),
        NOW()),
       ('6135550111', '$2a$10$evSlP2n2KXsCYXEFs6bDHuunG4UpDA2rNaPffakR4TPF6vnpIkoBK', 'address8', NOW(),
        NOW()),
       ('6135550122', '$2a$10$evSlP2n2KXsCYXEFs6bDHuunG4UpDA2rNaPffakR4TPF6vnpIkoBK', 'address9', NOW(),
        NOW()),
       ('6135550155', '$2a$10$evSlP2n2KXsCYXEFs6bDHuunG4UpDA2rNaPffakR4TPF6vnpIkoBK', 'address10', NOW(),
        NOW());

DELETE
FROM t_product;
INSERT INTO t_product (merchant_id, name, price, percent_off, description)
VALUES (4, 'Hotdog', 5.00, 10, 'description1'),
       (4, 'Hamburger', 4.60, 12, 'description2'),
       (5, 'Chinese Steam Rice', 4.70, 14, 'description3'),
       (6, 'Vietnamese Pho', 4.80, 17, 'description4'),
       (7, 'Taiwan special noodles', 4.90, 90, 'description5'),
       (8, 'Bubble Tea', 4.10, 5, 'description6'),
       (8, 'Ramen', 4.20, 44, 'description7'),
       (9, 'Beer', 4.40, 10, 'description8'),
       (9, 'Cola', 4.00, 10, 'description9'),
       (9, 'Wine', 4.60, 12, 'description10'),
       (10, 'Chicken Wings', 4.90, 14, 'description11');

DELETE
FROM t_merchant;
INSERT INTO t_merchant (phone, password, address, create_at, update_at, name, description)
VALUES ('6135550120', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address1', NOW(), NOW(),
        'Hamburger King', 'lalalalalalalala'),
       ('6135550121', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address2', NOW(), NOW(),
        'Domino', 'lalalalalalalala'),
       ('6135550122', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address3', NOW(), NOW(),
        'StarBucks', 'lalalalalalalala'),
       ('6135550123', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address4', NOW(), NOW(),
        'Korean BBQ', 'lalalalalalalala'),
       ('6135550124', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address5', NOW(), NOW(),
        'King of Chicken', 'lalalalalalalala'),
       ('6135550125', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address6', NOW(), NOW(),
        'Salad Queen', 'lalalalalalalala'),
       ('6135550127', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address7', NOW(), NOW(),
        'Quesada Burritos & Tacos', 'lalalalalalalala'),
       ('6135550128', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address8', NOW(), NOW(),
        'Subway', 'lalalalalalalala'),
       ('6135550129', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address9', NOW(), NOW(),
        'KFC', 'lalalalalalalala'),
       ('6135550130', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address10', NOW(), NOW(),
        'Mcdonald\'s', 'lalalalalalalala'),
       ('6135550131', '$2a$10$saXxj3xK.QHygAQrPX1uKeZalzf4f3j1ejmsoSnrJIFD9HGLsRH.S', 'address11', NOW(), NOW(),
        'Hamburger King2', 'lalalalalalalala');

DELETE
FROM t_merchant_tag;
INSERT INTO t_merchant_tag (merchant_id, tag_name)
VALUES (1, 'Chicken'),
       (1, 'Hamburger or Breakfast'),
       (2, 'Alcohol'),
       (3, 'Tea'),
       (4, 'Coffee'),
       (5, 'Chinese Food'),
       (6, 'Mexican Food'),
       (7, 'Chicken'),
       (7, 'Hamburger or Breakfast');

DELETE
FROM t_tag;
INSERT INTO t_tag (name)
VALUES ('Offers'),
       ('Chicken'),
       ('Vegetarian'),
       ('Burgers'),
       ('Desserts'),
       ('Alcohol'),
       ('Breakfast'),
       ('Coffee'),
       ('Indian'),
       ('Vietnamese Food'),
       ('Japanese Food'),
       ('Chinese Food'),
       ('Mexican Food'),
       ('Hamburger or Breakfast'),
       ('Tea');


DELETE
FROM t_shopping_cart;
INSERT INTO t_shopping_cart (user_id, product_id, quantity)
VALUES (1, 1, 2),
       (1, 2, 3),
       (3, 3, 1),
       (3, 1, 2),
       (3, 4, 4),
       (4, 2, 2),
       (2, 5, 1),
       (2, 6, 1),
       (5, 2, 1);

DELETE
FROM t_order;
INSERT INTO t_order (user_id,
                     merchant_id,
                     address,
                     phone,
                     payment_method,
                     delivery_time,
                     delivery_method,
                     total_price,
                     delivery_fee,
                     tax,
                     tip,
                     comment,
                     create_at,
                     update_at)
VALUES (1, 1, 'LULALA Road', '6135550143', 0, DATE_ADD(NOW(), INTERVAL 30 MINUTE), 0, 10.23, 1.0, 1.0, 2.0, 'comment1',
        NOW(), NOW()),
       (2, 2, 'GAGA Road', '6135550195', 1, DATE_ADD(NOW(), INTERVAL 59 MINUTE), 0, 10.24, 1.1, 1.1, 2.1, 'comment2',
        NOW(), NOW());