import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border-2  border-slate-600 rounded-md">No</th>
          <th className="border-2 border-slate-600 rounded-md">Title</th>
          <th className="border-2 border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border-2 border-slate-600 rounded-md max-md:hidden">
            Publish Year
          </th>
          <th className="border-2 border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border-2 border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border-2 border-slate-700 rounded-md text-center">
              {book.title}
            </td>
            <td className="border-2 border-slate-700 rounded-md text-center max-md:hidden">
              {book.author}
            </td>
            <td className="border-2 border-slate-700 rounded-md text-center max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border-2 border-slate-700 text-center rounded-md">
              <div className="flex justify-center">
                <Link
                  to={`/books/details/${book._id}`}
                  className="mr-3
                "
                >
                  <BsInfoCircle className="text-blue-700" />
                </Link>
                <Link
                  to={`/books/edit/${book._id}`}
                  className="mr-3
                "
                >
                  <AiOutlineEdit className="text-yellow-300" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
