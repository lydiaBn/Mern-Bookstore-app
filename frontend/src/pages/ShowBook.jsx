import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]); // Add id as dependency to useEffect

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Details About the book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <div className="text-xl mr-4 text-gray-500">
              <span className="text-xl mr-4 text-black"> Id:</span>{" "}
              <span>{book._id}</span>
            </div>
            <div className="text-xl mr-4 text-gray-500">
              <span className="text-xl mr-4 text-black"> Title:</span>{" "}
              <span>{book.title}</span>
            </div>
            <div className="text-xl mr-4 text-gray-500">
              <span className="text-xl mr-4 text-black"> Author:</span>{" "}
              <span>{book.author}</span>
            </div>
            <div className="text-xl mr-4 text-gray-500">
              <span className="text-xl mr-4 text-black"> Publish Year:</span>{" "}
              <span>{book.publishYear}</span>
            </div>
            <div className="text-xl mr-4 text-gray-500">
              <span className="text-xl mr-4 text-black"> Create Time:</span>{" "}
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="text-xl mr-4 text-gray-500">
              <span className="text-xl mr-4 text-black">
                {" "}
                Last Update Time:
              </span>
              : <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
