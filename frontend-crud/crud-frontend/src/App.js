import './App.css';
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from './products/AddProduct';
function App() {
  return (
    <div className="App">
      <Router>
<Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/novo-produto" element={<AddProduct/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
