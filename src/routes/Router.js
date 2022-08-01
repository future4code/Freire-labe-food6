import { BrowserRouter, Routes, Route} from "react-router-dom"
import TestPage from "../pages/TestPage/TestPage"
import Home from "../pages/TestPage/Home/Home"

const Router = () => {    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router