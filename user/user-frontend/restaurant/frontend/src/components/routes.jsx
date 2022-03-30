import { Route, Routes } from "react-router-dom";
import Page from "../pages/page";
import Login from "../pages/login";
import Homepage from "./home/home";
import React from 'react';
import Menu from "./menu/menu";

export default function Routing(props) {
  const [loginToken, setLoginToken] = React.useState(null);

  const logout = () => {
    setLoginToken(null);
  }

  if(loginToken) {
    return (
      <Routes>
        <Route path="/" element={<Page logout={logout} exactPage={<Homepage merchant_id={loginToken}/>} />} />
        <Route path="/menu" element={<Page logout={logout} exactPage={<Menu merchant_id={loginToken}/>} />} />
      </Routes>
    );
  } else {
    return (
      <Login authenticate={setLoginToken}/>
    )
  }
}
