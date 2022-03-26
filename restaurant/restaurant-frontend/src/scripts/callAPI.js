const axios = require('axios')

var state;

async function apiGet(route, params) {
  const res = await axios.get(route,
    {
      params: params
    }
  );
  state = res.data;
  // console.log(res);

  return state;
}

async function apiPost(route, body) {
  let result = null;
  await axios.post(route, body).then((response) => {
    result = response.data;
  })
  return result;
}

function apiPut(route, body) {

}

export {apiGet, apiPost, apiPut};