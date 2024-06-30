import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.books);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 ">
      <div className="flex justify-center items-center gap-x-4">
        <button
          onClick={() => setShowType("table")}
          className={`${
            showType === "table"
              ? "bg-sky-800 text-white"
              : "bg-sky-100 text-sky-800"
          } p-2 rounded-md`}
        >
          Table
        </button>
        <button
          onClick={() => setShowType("card")}
          className={`${
            showType === "card"
              ? "bg-sky-800 text-white"
              : "bg-sky-100 text-sky-800"
          } p-2 rounded-md`}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8"> Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
          Add Book
        </Link>
      </div>
      {loading ? <Spinner /> : showType === 'table' ?  <BooksTable books={books} /> : <BooksCard books={books} />}
    </div>
  );
};

export default Home;
