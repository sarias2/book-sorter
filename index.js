const express = require("express");
const booksDB = require("./models/DBHelpers");
const bodyParser = require("body-parser");
const app = express();
const PORT = 4500;

// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/books", async(req, res) => {
    try {
        const results = await booksDB.getAllBooks();
        res.status(200).json({ results })
    } catch (error) {
        console.log(error);
    }
})

app.post("/books", async(req, res) => {
    try {
        const results = await booksDB.createBook(req.body);
        res.status(201).json({ id: results[0] });
    } catch (error) {
        console.log(error);
    }
})

app.patch("/books/:id", async(req, res) => {
    try {
        const id = await booksDB.updateBook(req.params.id, req.body);
        res.status(201).json("Success: true");
    } catch (error) {
        console.log(error);
    }
})

app.delete("/books/:id", async(req, res) => {
    try {
        await booksDB.deleteBook(req.params.id);
        res.status(200).json({ success: true });
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));