import './styles/App.css';
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCompany from './pages/AddCompany';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import ViewCompany from './pages/ViewCompany';
import ViewCompany1 from './pages/ViewCompany1';
import ViewCompany2 from './pages/ViewCompany2';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/add-company' element={<AddCompany />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route exact path='/dashboard0' element={<ViewCompany />} />
          <Route exact path='/dashboard1' element={<ViewCompany1 />} />
          <Route exact path='/dashboard2' element={<ViewCompany2 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;