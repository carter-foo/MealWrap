import Login from '../components/Login';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Categories from './Categories/Categories';
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
    {
        path: '/categories',
        element: <Categories />,
    },
];

export default routes;
