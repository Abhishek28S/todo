const bookModel = require("../model/model");

exports.createBook = async (req) => {
  const { title, author, summary } = req.body;
  console.log(title, author, summary);
  if (!title && !author && !summary) {
    throw "Please fill all the fields";
  } else {
    try {
      const newBook = new bookModel({
        title,
        author,
        summary,
      });
      await newBook.save();
      return newBook;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
};

exports.getAllBook = async () => {
  try {
    return await bookModel.find().select("-_v");
  } catch (error) {
    throw error;
  }
};

exports.getBook = async (req) => {
  try {
    return await bookModel.findOne({ _id: req.params.id }).select("-__v");
  } catch (error) {
    throw error;
  }
};

exports.updateBook = async (req) => {
  try {
    return await bookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  } catch (error) {
    throw error;
  }
};

exports.deleteBook = async (req) => {
  try {
    return await bookModel.findByIdAndDelete({ _id: req.params.id });
  } catch (error) {
    throw error;
  }
};
