import {Route, Routes} from 'react-router-dom';
import Login from '../pages/login';
import Homepage from '../pages/home';
import Menu from '../pages/menu';
import Promotions from '../pages/promotions';

export default function Routing () {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Homepage/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/promotions" element={<Promotions/>}/>
        </Routes>
    );
}