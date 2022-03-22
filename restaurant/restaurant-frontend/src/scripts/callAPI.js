const axios = require('axios')

var state;

export async function callAPI(request, d) {
  const res = await axios.get(request,
    {
      params: d
    }
  );
  state = res.data;

  return state;
}