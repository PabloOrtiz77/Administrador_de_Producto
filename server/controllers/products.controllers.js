const Productos = require("../models/product.models");

module.exports.getProducto = async (req, res) => {
  try {
    const random = Boolean(req.query?.random);
    const Producto = await Productos.find();
    if (random) {
      const valorrandom = Math.round(Math.random() * (Producto.length - 1));
      res.status(200);
      res.json(Producto[valorrandom]);
      return;
    }
    res.status(200);
    res.json(Producto);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

module.exports.getProductoId = async (req, res) => {
  try {
    const foundProducto = await Productos.findById(req.params.id);
    res.status(200);
    res.json(foundProducto);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

module.exports.getProductoRandom = async (req, res) => {
  try {
    const Producto = await Productos.find();
    const valorrandom = Math.round(Math.random() * (Producto.length - 1));
    res.status(200);
    res.json(Producto[valorrandom]);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

module.exports.createProducto = async (req, res) => {
  try {
    const crearProducto = await Productos.create(req.body);
    res.status(201); //201 significa creado
    res.json(crearProducto);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.updateProducto = async (req, res) => {
  try {
    const updatecrearProducto = await Productos.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200); //201 significa creado
    res.json(updatecrearProducto);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.deletedateProducto = async (req, res) => {
  try {
    const deletecrearProducto = await Productos.deleteOne({
      _id: req.params.id,
    });
    res.status(200);
    res.json(deletecrearProducto);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
