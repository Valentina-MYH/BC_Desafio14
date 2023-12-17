import Card from "./Card";

const Lista = ({notas, eliminar, editar, favorito, setActualizar, notaFav   }) =>{
    return (
        <>{
            notas.length === 0 
            ? 
            (<h2 className="titulo">No hay Notas</h2>)
            :
            (
                <>
                <h2 className="titulo">Lista de Notas</h2>
                <div className="lista">
                {
                    notas.map((nota) => (
                        <Card
                        nota={nota}
                        key={nota.id}
                        eliminar={eliminar}
                        editar={editar}
                        favorito={favorito}
                        setActualizar = {setActualizar}
                        notaFav={notaFav}
                        />
                    ))
                }

                </div>
                </>
            )
        }
        </>
    )

}
export default Lista