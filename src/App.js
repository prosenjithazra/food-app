import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Common/Footer';
import Header from './Component/Common/Header';
import Home from './Component/Core/Home';
import './Style.css';
import Recipes from './Component/Core/Recipes';
import About from './Component/Core/About';
import Followers from './Component/Core/Followers';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import Home from './pages/Home'
// import Header from './Component/Common/Header';
// import About from './pages/About';
// import Student from './pages/Student';
// import Addstudent from './pages/Addstudent';
// import EditStudent from './pages/EditStudent';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Blog from './pages/Blog';
// import Model from './pages/Model';
// import { useDispatch } from 'react-redux';
// import BlogDetails from './pages/BlogDetails';
// import { check_token } from './redux/AuthSlice';
// import { useEffect } from 'react';
// import SearchData from './pages/SearchData';
// import  CategortWithBlog  from './pages/CategoryWithBlog';


function App() {
  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/about" element={<About />} />
            <Route path="/followers" element={<Followers />} />
          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;
