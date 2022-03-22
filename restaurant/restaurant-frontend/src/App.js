import logo from './logo.svg';
import { BrowserRouter, resolvePath } from 'react-router-dom';
import Routing from './components/routes';

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