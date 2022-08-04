import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddAdressPage from "../pages/AddAdressPage/AddAdress"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import TestPage from "../pages/TestPage/TestPage"
import HomePage from "../pages/HomePage/HomePage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/addadress" element={<AddAdressPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router