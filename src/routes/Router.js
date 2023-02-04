import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddAdressPage from "../pages/AddAdressPage/AddAdress"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import TestPage from "../pages/TestPage/TestPage"
import HomePage from "../pages/HomePage/HomePage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import EditProfile from "../pages/EditProfile/EditProfile"
import EditAdress from "../pages/EditAdress/EditAdress"
import Feed from "../pages/Feed/feed"
import SinupAdress from "../pages/SinupAdress/sinupAdress"
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route index element={<HomePage/>}/> 
            <Route path="loginpage" element={< LoginPage/>} />
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/edit" element={<EditProfile/>}/>  
                <Route path="/edit" element={<EditProfile/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/editadress" element={<EditAdress/>}/>
                <Route path="/feed" element={<Feed/>}/> 
                <Route path="/addresspage" element={<AddAdressPage/>}/>  
                <Route path="/sinupAdress" element={<SinupAdress/>}/> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router