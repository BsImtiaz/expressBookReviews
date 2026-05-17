const express = require('express');
const axios = require('axios');

const public_users = express.Router();

let books = require("./booksdb.js");

public_users.get('/', async function (req, res) {
    const response = await axios.get('http://localhost:5000/');
    res.send(response.data);
});

public_users.get('/isbn/:isbn', async function (req, res) {
    const isbn = req.params.isbn;
    const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
    res.send(response.data);
});

public_users.get('/author/:author', async function (req, res) {
    const author = req.params.author;
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    res.send(response.data);
});

public_users.get('/title/:title', async function (req, res) {
    const title = req.params.title;
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    res.send(response.data);
});

public_users.get('/review/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    res.send(books[isbn].reviews);
});

module.exports.general = public_users;
