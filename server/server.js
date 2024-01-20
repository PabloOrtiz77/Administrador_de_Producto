const express = require("express");
const cors = require("cors"); //este es para poder trabajar con react
require("./config/mongoose.config");

const app = express();
const port = 8000;

//midlewares
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const productRoutes = require("./routes/products.routes");
app.use("/api/productos", productRoutes);

app.listen(port, () => console.log(`server run on port ${port}`));
