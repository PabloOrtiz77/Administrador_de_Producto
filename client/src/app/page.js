"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [title, setTitle] = useState("");
  const [precio, setPrecio] = useState(0);
  const [desc, setDesc] = useState("");
  const [productos, setProductos] = useState([]);

  const Productos = async () => {
    try {
      //siempre que hacemos una peticion poner el try y catch
      const response = await axios.get("http://localhost:8000/api/productos");
      const result = await response.data;
      console.log(result); //si todo salio bien hay que setear los estados
      setProductos(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Productos();
  }, []);

  const handleCreateProduct = async (e) => {
    //sera asincronica pq aca se realizara
    //la peticion
    e.preventDefault();
    const data = {
      title: title,
      price: precio,
      description: desc,
    };
    try {
      //siempre que hacemos una peticion poner el try y catch
      const response = await axios.post(
        "http://localhost:8000/api/productos",
        data
      );
      const result = await response.data;
      console.log(result); //si todo salio bien hay que setear los estados
      setTitle("");
      setPrecio(0);
      setDesc("");
      Productos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main style={{ margin: "10px 40%" }}>
      <form onSubmit={handleCreateProduct}>
        <h1>Agregar Productos</h1>
        <div>
          <label htmlFor="title">title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="precio">precio</label>
          <input
            id="precio"
            type="text"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="desc">descripcion</label>
          <input
            id="desc"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></input>
        </div>
        <div>
          <button>Crear</button>
        </div>
      </form>
      <div>
        <h2>Productos</h2>
        {productos.map((valor, indice) => (
          <h3 key={indice}>
            <Link href={`./${valor._id}`}>{valor.title}</Link>
          </h3>
        ))}
      </div>
    </main>
  );
}
