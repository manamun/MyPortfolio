import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page';

function App() {
    return(
        <Router>
            <Routes>
                <Route path='/page' element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;