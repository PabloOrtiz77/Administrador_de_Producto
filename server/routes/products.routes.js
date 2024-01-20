const express = require("express");

const router = express.Router();

const productoController = require("../controllers/products.controllers");

router.post("", productoController.createProducto);
router.get("", productoController.getProducto);
router.get("/random", productoController.getProductoRandom);
router.get("/:id", productoController.getProductoId);
router.put("/:id", productoController.updateProducto);
router.delete("/:id", productoController.deletedateProducto);

module.exports = router;
