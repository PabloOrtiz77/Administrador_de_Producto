"use client"

import { useEffect, useState } from "react";
import { resolve } from "styled-jsx/css";
import axios from "axios";

const detalleProductos=({params})=>{
    const {id}=params;
    const [producto,setProducto]=useState({})
    const[titulo,setTitulo]=useState("")
    const[precio,setPrecio]=useState(0)
    const[desc,setDesc]=useState("")

    const findProduct=async()=>{
        try {
            const response = await axios.get(`http://localhost:8000/api/productos/${id}`);
            const result = await response.data;
             console.log(result); //si todo salio bien hay que setear los estados
            setProducto(result);
            setTitulo(result.title);
            setPrecio(result.price);
            setDesc(result.description);

            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        findProduct();
    },[])

    const UpdateProduct =async(e)=>{
        e.preventDefault();
        const data = {
        title: titulo,
        price: precio,
        description: desc,
        };
        try {
            //siempre que hacemos una peticion poner el try y catch
            const response = await axios.put(
              `http://localhost:8000/api/productos/${id}`,
              data
            );
            const result = await response.data;
            findProduct()
          } catch (error) {
            console.log(error);
          }
    }
    
    return (
        <>
        <form onSubmit={UpdateProduct}  >
        <div>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" value={titulo} onChange={e=>setTitulo(e.target.value)} />
        </div>
        <div>
        <label htmlFor="price">Precio</label>
        <input type="text" name="price" id="price" value={precio} onChange={e=>setPrecio(e.target.value)} />
        </div>
        <div>
        <label htmlFor="desc">Descripcion</label>
        <input type="text" name="desc" id="desc" value={desc} onChange={e=>setDesc(e.target.value)} />
        </div>
        <div>
        <button>Actualizar</button>
        </div>

        </form>
        </>
    )
}

export default detalleProductos;