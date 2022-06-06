const Author = require("../controllers/author.controller")

module.exports = app =>{
    app.get("/api/authors/:author_id", Author.oneAuthor)
    app.get("/api/authors", Author.allAuthors)
    app.post("/api/author/new", Author.createAuthor)
    app.put("/api/authors/:author_id", Author.updateAuthor)
    app.delete("/api/authors/delete/:author_id", Author.deleteAuthor)
}