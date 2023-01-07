
import {Routes,Route} from 'react-router-dom';
import Users from '../pages/Users';
import Login from '../pages/Login';
import About from '../pages/About';
import Home from '../pages/Home';
import UserInfo from '../pages/UserInfo'


export default function AllRoutes(){

    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/users' element={<Users/>} />
        <Route path='/users/:user_id' element={<UserInfo/>}/>
      </Routes>
    )
}