"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import ProductForm from "@/components/ProductForm/ProductForm";

export default function Home() {
  const [productos, setProducto] = useState([]);
  const Productos = async () => {
    try {
      //siempre que hacemos una peticion poner el try y catch
      const response = await axios.get("http://localhost:8000/api/productos");
      const result = await response.data;
      console.log(result); //si todo salio bien hay que setear los estados
      setProducto(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Productos();
  }, []);

  const handleCreateProduct = async (data) => {
    //sera asincronica pq aca se realizara
    //la peticion

    try {
      //siempre que hacemos una peticion poner el try y catch
      const response = await axios.post(
        "http://localhost:8000/api/productos",
        data
      );
      const result = await response.data;
      console.log(result); //si todo salio bien hay que setear los estados
      Productos();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/productos/${id}`
      );
      const result = await response.data;
      Productos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main style={{ margin: "10px 40%" }}>
      <h1>Agregar Productos</h1>

      <ProductForm onSubmitFn={handleCreateProduct} />
      <div>
        <h2>Productos</h2>
        {productos.map((valor, indice) => (
          <h3 key={indice}>
            <Link href={`./${valor._id}`}>{valor.title} --</Link>
            <Link href={`./${valor._id}/edit`}>Editar</Link>

            <button onClick={() => deleteProduct(valor._id)}>Borrar</button>
          </h3>
        ))}
      </div>
    </main>
  );
}
