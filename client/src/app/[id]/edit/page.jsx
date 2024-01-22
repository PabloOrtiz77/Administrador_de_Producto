"use client"

import { useEffect, useState } from "react";
import { resolve } from "styled-jsx/css";
import axios from "axios";
import ProductForm from "@/components/ProductForm/ProductForm";
const DetalleProductos = ({ params }) => {
    const { id } = params;
    const [producto, setProducto] = useState({});
  
    const findProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/productos/${id}`);
        const result = await response.data;
        console.log(result)
        setProducto(result);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      findProduct();
    }, []);
  
    const updateProduct = async (data) => {
      try {
        const response = await axios.put(`http://localhost:8000/api/productos/${id}`, data);
        const result = await response.data;
        findProduct();
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
        <h1>Editar Producto</h1>
  
        {Object.keys(producto).length > 0 && ( // Verificación de que el objeto producto tiene datos
          <ProductForm
            titleinitial={producto.title}
            priceInitial={producto.price}
            descInitial={producto.description}
            onSubmitFn={updateProduct}
            namebtn={"Actualizar"}
            clear={false}
          />
        )}
      </>
    );
  };
  
  export default DetalleProductos;
  