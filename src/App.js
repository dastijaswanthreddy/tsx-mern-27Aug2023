import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Character from './components/Character/Character';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/Character/:characterIndex' element={<Character/>}/>
            <Route exact path='/Search' element={<Search/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
