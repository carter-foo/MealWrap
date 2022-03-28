const axios = require('axios');

const aaa = async () => {
    try {
        const res = await axios.get('https://postman-echo.com/get', {
            params: {
                id: 1,
            },
        });
        console.log(res.data.args);
    } catch (err) {
        console.error(err);
    }
};

aaa();

