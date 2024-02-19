import './CSS/style.css'
import './CSS/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import StoryPage from './Pages/Home/Story'
import ProductPage from './Pages/Home/Product'

function Root(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/story' element={<StoryPage />}/>
                    <Route path='/product' element={<ProductPage />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root