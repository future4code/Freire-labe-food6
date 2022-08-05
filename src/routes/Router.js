import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddAdressPage from "../pages/AddAdressPage/AddAdress"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import TestPage from "../pages/TestPage/TestPage"
import HomePage from "../pages/HomePage/HomePage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import EditProfile from "../pages/EditProfile/EditProfile"
import EditAdress from "../pages/EditAdress/EditAdress"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/editadress" element={<EditAdress/>}/>
                <Route path="/editprofile" element={<EditProfile/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/" element={<TestPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/addadress" element={<AddAdressPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router