
function Card(props){
    return(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{props.nombre}</h2>
                <h2 className="card-text">{props.musica}</h2>
            </div>
        </div>
    )
}

export default Card
