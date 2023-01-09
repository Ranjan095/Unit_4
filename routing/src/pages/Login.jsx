
import { useContext } from "react"
import { AuthContext } from "./Context/AuthContextProvider"

export default function Login(){
  let {login}=useContext(AuthContext)

// console.log(isAuth)
    return (
      <div>
        <h1>Login Page</h1>
        <button onClick={login}>Login</button>
      </div>
    )
  }