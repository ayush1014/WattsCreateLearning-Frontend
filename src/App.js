import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home'
import About from "./components/about";
import Services from "./components/services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </Router>
  );
}

export default App; 