import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../pages/Context/AuthContextProvider"


export default function Navbar(){
let {isAuth,logOut}=useContext(AuthContext)
// console.log(isAuth)
    let link=[
        {path:'/',title:'Home'},
        {path:'/about', title:'About'},
        {path:'/login', title:'Login'},
        {path:'/users', title:'Users'}
    ]

    return(
        <div style={{display:'flex',
       justifyContent:'space-around',
       textAlign:'center',
       background:'yellow',
       padding:'15px',
       textDecoration:'none'}}>
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to ='/login'>Login</Link>
      <Link to='/users'>Users</Link> */}

      {link.map((ele)=><Link key={ele.path} to={ele.path}>{ele.title}</Link>)}
      <h4>isAuth: {isAuth?"Yes":"No"}</h4>
      <button disabled={!isAuth==true} onClick={logOut}>Logout</button>

      </div>
    )
}