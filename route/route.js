const express = require("express");
const router = express.Router();

const {
  createBook,
  getAllBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controller/book");

router.post("/create-book", async (req, res) => {
  try {
    console.log("hsdbajshdbjhasbd");
    const newBook = await createBook(req);
    res
      .status(201)
      .json({ data: newBook, message: "Book Created Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/all-book", async (req, res) => {
  try {
    const bookList = await getAllBook();
    res.status(200).json({ data: bookList });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/get-single-book/:id", async (req, res) => {
  try {
    const singleBook = await getBook(req);
    singleBook
      ? res.status(200).json({ data: singleBook })
      : res.status(400).json({ error: "No data found" });
  } catch (error) {
    res.status(400).json({ error: "Oops, Something went wrong!!" });
  }
});

router.patch("/update-book/:id", async (req, res) => {
  try {
    const updatedBook = await updateBook(req);
    updatedBook
      ? res
          .status(200)
          .json({ data: updatedBook, message: "Book Updated Successfully" })
      : res.status(400).json({ error: "Oops, Something went wrong!!" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.delete("/delete-book/:id", async (req, res) => {
  try {
    const deletedBook = deleteBook(req);
    deletedBook
      ? res
          .status(200)
          .json({ data: deletedBook, message: "Book Deleted Successfully" })
      : res.status(400).json({ error: "Oops, Something went wrong!!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
