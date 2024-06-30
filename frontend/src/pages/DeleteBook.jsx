import { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.error("Error response:", err.response);
        setLoading(false);
        alert("Error deleting book");
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 font-semibold">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl ">
          {" "}
          Are You Sure You Want To Delete This Book ?{" "}
        </h3>
        <button
          onClick={handleDeleteBook}
          className="p-4 bg-red-600 text-white m-8 w-full"
        >
          {" "}
          Yes, Delete it{" "}
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
