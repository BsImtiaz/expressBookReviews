const express = require('express');
const public_users = express.Router();

let books = require("./booksdb.js");

public_users.get('/',function (req, res) {
  res.send(JSON.stringify(books,null,4));
});

public_users.get('/isbn/:isbn',function (req, res) {

  const isbn = req.params.isbn;

  res.send(books[isbn]);

});

public_users.get('/author/:author',function (req, res) {

  const author = req.params.author;
  let filtered_books = {};

  Object.keys(books).forEach(key => {

    if(books[key].author === author){
      filtered_books[key] = books[key];
    }

  });

  res.send(filtered_books);

});

public_users.get('/title/:title',function (req, res) {

  const title = req.params.title;
  let filtered_books = {};

  Object.keys(books).forEach(key => {

    if(books[key].title === title){
      filtered_books[key] = books[key];
    }

  });

  res.send(filtered_books);

});

public_users.get('/review/:isbn',function (req, res) {

  const isbn = req.params.isbn;

  res.send(books[isbn].reviews);

});

module.exports.general = public_users;
