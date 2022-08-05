import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddAdressPage from "../pages/AddAdressPage/AddAdress"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import TestPage from "../pages/TestPage/TestPage"
import HomePage from "../pages/HomePage/HomePage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import EditProfile from "../pages/EditProfile/EditProfile"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route index element={<HomePage/>}/> 
            <Route path="addresspage" element={< AddAdressPage/>} />
            <Route path="loginpage" element={< LoginPage/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router