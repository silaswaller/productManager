const ProductController = require('../controllers/product.controller');  //Import the code from Code Block 1

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);

    app.post("/api/products", ProductController.createProduct);

    app.get("/api/products/:id", ProductController.fineOneProduct);

    app.delete("/api/products/:id", ProductController.deleteOneProduct);

    app.put("/api/products/:id", ProductController.updateProduct);
}