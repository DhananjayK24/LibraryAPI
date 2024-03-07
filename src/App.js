import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import BookList from "./Components/BookList";
import { AppProvider } from "./context";

function App() {
   return (
    <AppProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="book" element={<BookList />} />
      </Routes>
    </Router>
    </AppProvider>
  );
}

export default App;