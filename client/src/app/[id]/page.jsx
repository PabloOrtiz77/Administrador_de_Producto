"use client";

import { useEffect, useState } from "react";
import axios from "axios";

  const ProductosID = ({params}) => {
  
  const [producto,setProducto]=useState({})
  
  const Producto =async()=>{

    try {
      const response = await axios.get(`http://localhost:8000/api/productos/${params.id}`);
      const result = await response.data;
      console.log(result); //si todo salio bien hay que setear los estados
      setProducto(result);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    Producto();
  },[])


  return (
   <div style={{ margin: "10px 40%" }}>
   
 
      <h1>{producto.title}</h1>
      <h3>Precio: ${producto.price}</h3>
      <h3>Descripción: {producto.description}</h3>
  
  


   </div>
      
  )
};

export default ProductosID;
