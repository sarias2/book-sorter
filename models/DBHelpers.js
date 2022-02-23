const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

function createBook(book) {
    return db("books").insert(book);
}

function getAllBooks() {
    return db("books").select("*");
}

function updateBook(id, book) {
    return db("books").where({ id }).update(book);
}

function deleteBook(id) {
    return db("books").where({ id }).delete();
}

module.exports = { createBook, getAllBooks, updateBook, deleteBook }