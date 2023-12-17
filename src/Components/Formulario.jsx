import { useState, useEffect } from "react";

const Formulario = ({agregar, editar, actualizar}) =>{
    const [id, setId] = useState(null)
    const [titulo, setTitulo] = useState(" ")
    const [descrip, setDescrip] = useState( " ")
    const [fav, setFav] = useState(false)

    useEffect(() => {
        if(actualizar){
            setId(actualizar.id);
            setTitulo(actualizar.titulo);
            setDescrip(actualizar.descrip);
            setFav(actualizar.fav);
        } else {
            setId(null);
            setTitulo("");
            setDescrip("");
            setFav(false);
        }
    }, [actualizar])

        

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            titulo:"",
            descrip: "",
            fav:false,
        };

    if (!titulo.trim()) {
      alert("Ingrese un titulo");
      return;
    }

    if (!descrip.trim()) {
      alert("Ingrese una descripción");
      return;
    }

    if (id === null) {
      agregar(task);
    } else {
      editar(task, id);
    }

    setTitulo("");
    setDescrip("");
    setFav(false);

  };
const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "titulo") {
      setTitulo(e.target.value);
    } else if (e.target.name === "descrip") {
      setDescrip(e.target.value);
    } else if (e.target.name === "fav") {
      setFav(e.target.checked);
    }
  };

return (
    <form onSubmit={handleSubmit}>
      <label className="label"> 
        <h2 className="titulo">Tu formulario</h2>
        Titulo:
        <input
        className="input"
          type="text"
          name="titulo"
          value={titulo}
          onChange={handleChange}
          autoFocus
        />
      </label>

      <label className="label">
        Descripción de la Tarea:
        <textarea
          className="textarea"
          name="descrip"
          value={descrip}
          onChange={handleChange}
        />
      </label>

      <label className="label">
        Favorita:
        <input
          className="checkbox"
          type="checkbox"
          name="fav"
          checked={fav}
          onChange={handleChange}
        />
      </label>

      <input type="submit" value="Guardar" />
    </form>
  );
};  

  

export default Formulario;