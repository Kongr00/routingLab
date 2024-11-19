import './App.css'
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import Layout from "./comoponents/Layout/Layout.jsx";

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="home" element={<HomePage/>} />
                <Route path="about" element={<AboutPage/>} />
                <Route path="shop" element={<ShopPage/>} />
            </Route>
        </Routes>
    </Router>
  )
}

export default App
