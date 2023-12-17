const  Card= ({ nota, eliminar, notaFav, editar}) => {
    return (
        <>
            <h2>{nota.titulo}</h2>
            <p>{nota.descrip}</p>
            <button className="editar"onClick={() => editar(nota)}>
                Editar
            </button>
            <button className="fav" onClick={()=>notaFav(nota.id)}>
                Favotito
            </button>
            <button className="eliminar" onClick={() => eliminar(nota.id)}>
                Eliminar
            </button>
        </>
    )
}
export default Card;