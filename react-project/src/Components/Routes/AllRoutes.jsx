import { Routes, Route } from "react-router-dom"

import Navbar from "../Navbar/Navbar"
import LogIn from "../Pages/LogIn"
import Cart from "../Pages/Cart"
import SingleProduct from "../Pages/SingleProduct"

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navbar />}></Route>
                <Route path="/login" element={<LogIn />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/products/:id" element={<SingleProduct />}></Route>
            </Routes>
        </div>
    )
}

export { AllRoutes }