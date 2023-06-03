import { useState } from "react";
import styles from "./Form.module.css";

function Form (){
    const [error,setError]=useState()
    
    function handleSubmit(e) {
        // 

        e.preventDefault()
        console.log("Enviando formulario")
        if(nom.value.minlegth<3){
            setError("Nombre no puede tener menos de 3 caracteres")
            return
        }
    }
    
    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="nombre"></label>
            <input type="text" placeholder="Ingresa tu nombre" id="nom"></input>
            <input type="text" placeholder="Ingresa musica favorita" id="musica"></input>
            <button type="submit">Enviar</button>
            {error && <p>{error}</p>}
        </form>
    )

}

export default Form