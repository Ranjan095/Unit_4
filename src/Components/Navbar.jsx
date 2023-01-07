import { Link } from "react-router-dom"


export default function Navbar(){

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

      </div>
    )
}