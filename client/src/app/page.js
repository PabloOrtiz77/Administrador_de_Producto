"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";

export default function Home() {
  const [title, setTitle] = useState("");
  const [precio, setPrecio] = useState(0);
  const [desc, setDesc] = useState("");

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
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
    </main>
  );
}
