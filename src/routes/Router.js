import { BrowserRouter, Routes, Route} from "react-router-dom"
import TestPage from "../pages/TestPage/TestPage"
import HomePage from "../pages/HomePage/HomePage"


const Router = () => {    
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<HomePage/>}/>
                <Route path="/Test" element={<TestPage/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router