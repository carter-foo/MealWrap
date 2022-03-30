const axios = require('axios');

const aaa = async () => {
    try {
        const res = await axios.post('http://localhost:18080/api/v1/user/login', {
            phone: '6135550143',
            password: 'password',
        });
        console.log(res.data);
    } catch (err) {
        console.error(err);
    }
};

aaa();
