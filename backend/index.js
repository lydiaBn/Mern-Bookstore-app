import express from "express";
import { PORT, MONGO_URI } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import { booksRoutes } from "./routes/booksRoutes.js";
import cors from "cors";

const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for enabling CORS
//option1 : allow all origins with default of cors(*)
app.use(cors());
//option2: allow only specific origins
/* app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type"],
  })
); */

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello World");
});

app.use("/books", booksRoutes);

mongoose.connect(MONGO_URI).then(
  () => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  },
  (error) => {
    console.log("An error occurred", error);
  }
);
