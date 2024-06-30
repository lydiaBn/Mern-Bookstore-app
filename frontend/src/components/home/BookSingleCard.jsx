import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={book._id}
      className="border border-gray-500 rounded-lg p-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg text-sm">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-800">{book._id}</h4>
      <div className="flex books-center mb-2">
        <PiBookOpenTextLight className="text-2xl text-red-300" />
        <h2 className="ml-2">{book.title}</h2>
      </div>
      <div className="flex books-center mb-2">
        <BiUserCircle className="text-2xl text-red-300" />
        <h2 className="ml-2">{book.author}</h2>
      </div>
      <div className="flex justify-between books-center mt-4 p-4">
        <BiShow
          className="text-blue-300 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />

        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-purple-600 hover:text-black cursor-pointer" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-yellow-300 hover:text-black cursor-pointer" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-red-500 hover:text-black cursor-pointer" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
