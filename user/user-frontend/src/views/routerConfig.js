import Login from './LoginAndSignup/Login';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Categories from './Categories/Categories';
import MerchantsByCates from './MerchantsByCates/MerchantsByCates';
import MerchantPage from './MerchantPage/MerchantPage';
import Signup from './LoginAndSignup/Signup';
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
        path: '/merchantsbytag',
        element: <MerchantsByCates />,
    },
    {
        path: '/merchants',
        element: <MerchantPage />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
];

export default routes;
