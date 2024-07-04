import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import AddCourier from "./components/courier/AddCourier"
import ShipCourier from "./components/courier/ShipCourier"
import Navbar from './components/layout/Navbar'
import Home from "./components/home/Home"
import Footer from './components/layout/Footer'
import TrackOrder from "./components/courier/TrackOrder"
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import AboutUs from "./components/home/AboutUs"
import ContactUs from "./components/home/ContactUs"
import NoticeSlider from "./components/layout/NoticeSlider"
import BookingSuccess from './components/courier/BookingSuccess'
function App() {
  return (
    <main>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Home/>}/>
          <Route path='/placeCourier' element={<AddCourier/>}/>
          <Route path='/shipCourier' element={<ShipCourier/>}/>
          <Route path='/trackOrder' element={<TrackOrder/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/bookingSuccess' element={<BookingSuccess/>}/>

        </Routes>
        <Footer/>
      </Router>
      
    </main>
  )
}

export default App
