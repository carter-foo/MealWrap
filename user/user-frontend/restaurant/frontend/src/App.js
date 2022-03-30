import logo from './logo.svg';
import { BrowserRouter, resolvePath } from 'react-router-dom';
import Routing from './components/routes';

function App() {
  return (
    <div>
      <div className="background"/>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;