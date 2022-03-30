const axios = require('axios');

// const aaa = async () => {
//     try {
//         const res = await axios.post('http://localhost:18080/api/v1/user/login', {
//             phone: '6135550143',
//             password: 'password',
//         });
//         console.log(res.data);
//     } catch (err) {
//         console.error(err);
//     }
// };

const bbb = async () => {
    try {
        const res = await axios.post('http://localhost:18080/api/v1/order/insert', {
            userId: 3,
            merchantId: 3,
            address: '1919 University Drive, N.W',
            phone: '18818181899',
            paymentMethod: 1,
            deliveryTime: '2022-03-29 12:32:45',
            deliveryMethod: 0,
            totalPrice: 29.5,
            deliveryFee: 4.1,
            tax: 2.4,
            tip: 3.5,
            comment: '6666666',
        });
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};

bbb();
