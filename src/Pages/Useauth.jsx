import React from 'react';
import { Navigate,Outlet } from 'react-router-dom'

const Useauth = () => {
    const token = localStorage.getItem("token");
    
    // const content= token ? <Outlet /> : <Navigate to='/Login'  />;
    // return content;
    if(token){
        return <Outlet />;
    }else{
        return <Navigate to='/Login' replace />;
    }

}

export default Useauth