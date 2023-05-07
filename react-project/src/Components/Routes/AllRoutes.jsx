import { Routes, Route } from "react-router-dom"

import Navbar from "../Navbar/Navbar"
import LogIn from "../Pages/LogIn"
import Cart from "../Pages/Cart"
import SingleProduct from "../Pages/SingleProduct"
import Combo from "../Pages/Combo"
import HandCream from "../Pages/HandCream"
import HandSanitizer from "../Pages/HandSanitizer"
import HandSoap from "../Pages/HandSoap"
import OralCare from "../Pages/OralCare"
import Refills from "../Pages/Refills"
import SkinCare from "../Pages/SkinCare"
import SignUp from "../Pages/Signup"

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navbar />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/login" element={<LogIn />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/products/:id" element={<SingleProduct />}></Route>

                {/* <Route path="/Combo" element={<Combo />}></Route>
                <Route path="/HandCream" element={<HandCream />}></Route>
                <Route path="/HandSanitizer" element={<HandSanitizer />}></Route>
                <Route path="/HandSoap" element={<HandSoap />}></Route>
                <Route path="/OralCare" element={<OralCare />}></Route>
                <Route path="/Refills" element={<Refills />}></Route>
                <Route path="/SkinCare" element={<SkinCare />}></Route> */}
            </Routes>
        </div>
    )
}

export { AllRoutes }