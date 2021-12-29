import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/SignIn'
import SignUp from './pages/SignUp'
import Rooms from './pages/Rooms'
import Price from './pages/Price'
import Checkout from './pages/Checkout/Checkout'


export default function App() {
  return (
    <>     
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/Signup" element={<SignUp/>}/>
          <Route exact path="/Rooms" element={<Rooms/>}/>
          <Route exact path="/Price" element={<Price/>}/>
          <Route exact path="/Checkout" element={<Checkout/>}/>
        </Routes>
    </Router>
     
    </>

  );
}
