
import { Routes, Route } from 'react-router-dom';
import Users from '../pages/Users';
import Login from '../pages/Login';
import About from '../pages/About';
import Home from '../pages/Home';
import UserInfo from '../pages/UserInfo'
import PrivateRout from '../pages/PrivatePage';

export default function AllRoutes() {

  return (
    <Routes>
      {/* Public Page */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />

      {/* private page */}

      <Route path='/users' element={
        <PrivateRout>
          <Users />
        </PrivateRout>
      } />

      <Route path='/users/:user_id' element={
        <PrivateRout>
          <UserInfo />
        </PrivateRout>
      } />
    </Routes>
  )
}