const productRouter = require('express').Router();
const productController = require("../controllers/products.controllers");

productRouter.get("/", productController.getAllProducts);

productRouter.get("/:id", productController.getProduct);

productRouter.post("/", productController.createProduct);

productRouter.put("/:id", productController.editProduct);

productRouter.delete("/:id", productController.deleteProduct);

module.exports = productRouter;