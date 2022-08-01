import { BrowserRouter, Routes, Route} from "react-router-dom"
import TestPage from "../pages/TestPage/TestPage"

const Router = () => {    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TestPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router