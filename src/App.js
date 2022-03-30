import 'normalize.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import routes from './views/routerConfig';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://164.92.116.243:18080';
// axios.defaults.baseURL = 'http://localhost:18080';



function App() {
    console.log(routes);
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    {routes.map(routeObj => (
                        <Route key={routeObj.path} {...routeObj} />
                    ))}
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
