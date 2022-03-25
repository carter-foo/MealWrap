# MongoDB API:

**1.**<br/>
Order record: 

1. Get: get Order record by user<br/>
2. Post: Submit order

**2.**<br/>
Shopping Cart:
1. Get: get Shopping Cart record<br/>
2. Post: Update Shopping Cart

```json
const ccc = {
    merchantName: "Cactus Club Cafe",
    items: [{
        name:"lalalaDddddd",
        price:"10.69",
        amount:1
    },
    {
        name:"lalala",
        price:"10.69",
        amount:1
    },
    {
        name:"lalala",
        price:"10.69",
        amount:1
    },
    {
        name:"lalala",
        price:"10.69",
        amount:1
    },
    {
        name:"lalala",
        price:"10.69",
        amount:1
    }]
}
```

**3.**  
Merchant:
1. Get: Get all Merchants **By Tags**

**4.**  
Tags:
1. Get all Tags **(Contains imgs)**

**5.**  
Both Are Post request  
Login and Signin:  

Login:  
1.Username(phoneNumber)  
2.Password

Signin:
1.Username(phoneNumber)  
2.Password


**6.**  
index page imgs:  
1. Get: Swiper(大轮播图：两张菜品 or more)  
2. Get: Hot Deals: several imgs, and their stars, prices and and name
3. Get: Top of the week: several imgs, and their prices and and name
