import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContextProvider";

export default function PrivateRout({ children }) {
    let {isAuth}=useContext(AuthContext)
   

    if (isAuth) {
        return children;
    } else {
        return <Navigate to='/login' />

    }

}