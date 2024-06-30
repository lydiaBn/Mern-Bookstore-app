import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//route to create a new book in the database
router.post("/", async (req, res) => {
  // Changed from router.get to router.post
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).json({
        error: "Provide all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = new Book(newBook);
    await book.save(); // Save the new book to the database
    return res.status(201).json(book); // Changed from response to res
  } catch (error) {
    console.error("Error:", error); // Log the actual error
    return res.status(500).json({ error: "Something went wrong" });
  }
});

//route to get all books from the databse
router.get("/", async (req, res) => {
  try {
    const books = await Book.find(); // Get all books from the database
    return res.status(200).json({
      count: books.length,
      books: books,
    }); // Return the books
  } catch (error) {
    console.error("Error:", error); // Log the actual error
    return res.status(500).json({ error: "Something went wrong" });
  }
});

//route to get a single book from the database
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id); // Get the book with the specified ID from the database
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res.status(200).json(book); // if found return the book with the specified ID
  } catch (error) {
    console.error("Error:", error); // Log the actual error
    return res.status(500).json({ error: "Something went wrong" });
  }
});

//route to update a book in the database
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id); // Get the book with the specified ID from the database
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    if (req.body.title || req.body.author || req.body.publishYear) {
      book.title = req.body.title;
      book.author = req.body.author;
      book.publishYear = req.body.publishYear;
    }
    await book.save(); // Save the updated book to the database
    return res.status(200).json(book); // Return the updated book
  } catch (error) {
    console.error("Error:", error); // Log the actual error
    return res.status(500).json({ error: "Something went wrong" });
  }
});

//route to delete a book from the database
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id); // Get the book with the specified ID from the database
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res.status(200).send("Book deleted successfully");
  } catch (error) {
    console.error("Error:", error); // Log the actual error
    return res.status(500).json({ error: "Something went wrong" });
  }
});

export const booksRoutes = router; // Named export
