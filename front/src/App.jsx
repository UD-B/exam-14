import Home from './pages/Home'
import Movie from './pages/Movie'
import Seats from './pages/Seats'
import { BrowserRouter, Routes, Route } from 'react-router'
import { useMovieStore } from './store/store.js'

function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/movie' element={<Movie/>} />
                    <Route path='/seats' element={<Seats/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
