const express = require("express");
const router = express.Router();

const Book = require("../model/Book");

const booksController = require("../controllers/booksController");

router.get("/", booksController.getAllBooks);

module.exports = router;
