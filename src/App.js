import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes index element={Home}>
                <Route index to="/" element={<Home/>}/>
                <Route path="/movie/:id" element={<Movie/>}/>
            </Routes>
        </Router>
    </div>
  );  
} 

export default App;
