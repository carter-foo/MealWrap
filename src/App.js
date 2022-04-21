import 'normalize.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import routes from './views/routerConfig';




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
