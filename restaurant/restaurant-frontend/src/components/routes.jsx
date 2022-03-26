import { Route, Routes } from "react-router-dom";
import Page from "../pages/page";
import Login from "../pages/login";
import Homepage from "./home/home";
import Menu from "./menu/menu";
import Promotions from "./promotions/promotions";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/:id/home" element={<Page exactPage={<Homepage />} />} />
      <Route path="/menu" element={<Page exactPage={<Menu />} />} />
      <Route path="/promotions" element={<Page exactPage={<Promotions />} />} />
    </Routes>
  );
}
