// Update with your config settings.

module.exports = {

    development: {
        client: "sqlite3",

        connection: {
            filename: "./DB/books-data-base.db3",
        },
        useNullAsDefault: true
    }
};