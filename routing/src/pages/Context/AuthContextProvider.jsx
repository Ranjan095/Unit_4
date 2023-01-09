
import React, { useState } from "react";
import { createContext } from "react";


export let AuthContext=createContext();

export default function AuthContextProvider({children}){

    let [isAuth,setAuth]=useState(false);

    let login=()=>{
        setAuth(true)
    };

    let logOut=()=>{
        setAuth(false)
    };

    return(
        <AuthContext.Provider value={{isAuth,login,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

