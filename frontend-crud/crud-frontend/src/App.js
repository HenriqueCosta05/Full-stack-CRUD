import './App.css';
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from './products/AddProduct';
import ViewProduct from './products/ViewProduct';
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/novo-produto" element={<AddProduct />} />
          <Route exact path="/produtos/:id" element={<ViewProduct/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
