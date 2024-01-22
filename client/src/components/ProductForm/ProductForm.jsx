
"use client"
import { useState } from "react";



const ProductForm=({titleinitial="",priceInitial=0,descInitial="",onSubmitFn,namebtn="crear",clear=true})=>{
    const [title, setTitle] = useState(titleinitial);
    const [precio, setPrecio] = useState(priceInitial);
    const [desc, setDesc] = useState(descInitial);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = {
            title: title,
            price: precio,
            description: desc,
          };
        onSubmitFn(data)
        if (clear){
            setTitle("")
            setPrecio(0)
            setDesc("")
        }
    }
    return(
        <>
         <form onSubmit={handleSubmit}>
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
                <button>{namebtn}</button>
                </div>
        </form>
        </>

    )
}

export default ProductForm