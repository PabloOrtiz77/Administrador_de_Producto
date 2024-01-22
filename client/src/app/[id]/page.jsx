"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

const ProductosID = ({ params }) => {
  const [producto, setProducto] = useState({});
  const router = useRouter();

  const Producto = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/productos/${params.id}`);
      const result = await response.data;
      console.log(result);
      setProducto(result);
    } catch (error) {
      console.error('Error al cargar el producto:', error);
    }
  };

  const borrarProducto = async (id) => {
    try {
      const confirmacion = window.confirm("¿Seguro que quieres borrar este producto?");
      if (confirmacion) {
        await axios.delete(`http://localhost:8000/api/productos/${id}`);
        router.push('/');
      }
    } catch (error) {
      console.error('Error al borrar el producto:', error);
    }
  };

  useEffect(() => {
    Producto();
  }, [router]); 

  if (typeof window === 'undefined') {
    return null; 
  }

  return (
    <div style={{ margin: "10px 40%" }}>
      <h1>{producto.title}</h1>
      <h3>Precio: ${producto.price}</h3>
      <h3>Descripción: {producto.description}</h3>
      <button onClick={() => borrarProducto(params.id)}>Borrar</button>
    </div>
  );
};

export default ProductosID;
