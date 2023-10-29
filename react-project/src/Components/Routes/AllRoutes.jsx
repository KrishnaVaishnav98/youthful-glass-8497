import { Routes, Route } from "react-router-dom"

import Navbar from "../Navbar/Navbar"
import LogIn from "../Pages/LogIn"
import Cart from "../Pages/Cart"
import SingleProduct from "../Pages/SingleProduct"
import SignUp from "../Pages/Signup"
import PrivateRoute from '../Routes/PrivateRoute'

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navbar />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/login" element={<LogIn />}></Route>
                <Route path="/cart" element={<PrivateRoute> <Cart /></PrivateRoute>}></Route>
                <Route path="/products/:id" element={<PrivateRoute> <SingleProduct /></PrivateRoute>}></Route>

            </Routes>
        </div>
    )
}

export { AllRoutes }