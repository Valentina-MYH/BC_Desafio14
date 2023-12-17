import { useEffect, useState } from "react"
import Formulario from "./Formulario";
import Lista from "./Lista"


const Notas = () => {
    const [notas, setNotas] = useState([]);
    const [actualizar, setActualizar] = useState(null);

    useEffect(() => {
        setNotas(notas);
    }, [notas])

    const agregar = (nota) => {
        const notaNueva = {
            id: notas.length + 1,
            ...notas
        }
        setNotas([...notas, notaNueva])
    }

    const editar = (nota, id) =>{
        const editada = notas.map((e) => (e.id === id ? nota : e))
        setNotas(editada);

    }

    const favorito = (id) => {
        const favoritos = notas.map((nota) => (nota.id === id ? {...nota, fav: !nota.fav } : nota ))
        const notasActualizadas = favoritos;
        setNotas(favoritos);

    }

    const eliminar = (id) =>{ 
        const restantes = notas.map((nota) =>
        nota.id === id ? {...nota, fav: !nota.favorite } : nota 
        );
        
        setNotas(restantes)
    }


    return(
        <div className="conteiner">
        
        
        <Formulario
        agregar={agregar}
        editar={editar}
        actualizar={actualizar}
        />
        <Lista
        notas={notas}
        setActualizar={setActualizar}
        editar={editar}
        favorito={favorito}
        eliminar={eliminar}
        />


        </div>
    )




}
export default Notas;