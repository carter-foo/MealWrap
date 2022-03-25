import Login from '../components/Login';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Categories from './Categories/Categories';
import MerchantsByCates from './MerchantsByCates/MerchantsByCates';
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
    {
        path: '/merchants',
        element: <MerchantsByCates />,
    },
];

export default routes;
