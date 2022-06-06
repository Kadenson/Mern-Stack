// IMPORT THE CONTROLLER FROM YOUR CONTROLLER.JS
const ProductController = require("../controllers/product.controller")



module.exports = app =>{
    app.get("/api/products/:product_id", ProductController.oneProduct)
    app.get("/api/products", ProductController.allProducts)
    app.post("/api/products/new", ProductController.create)
    app.put("/api/products/:product_id", ProductController.updateProduct)
    app.delete("/api/products/:product_id", ProductController.deleteProduct)
}