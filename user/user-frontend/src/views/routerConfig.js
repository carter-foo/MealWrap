import Login from '../components/Login';
import Home from './Home/Home';
const routes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Home />
    },
];

export default routes;
