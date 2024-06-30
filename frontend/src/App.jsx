import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateBook from "./pages/CreateBook.jsx";
import UpdateBook from "./pages/UpdateBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";

const App = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/28/65/e7/2865e7cddb6106127de5958d5e606270.jpg')",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<UpdateBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </div>
  );
};

export default App;
