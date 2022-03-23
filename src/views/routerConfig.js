import Login from '../components/Login';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
const routes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/checkout',
        element: <Checkout />,
    },
];

export default routes;
