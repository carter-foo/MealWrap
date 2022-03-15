import logo from './logo.svg';
import { BrowserRouter, resolvePath } from 'react-router-dom';
import Routing from './components/routes';

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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;