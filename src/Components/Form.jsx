import { useState } from "react";
import styles from "./Form.module.css";

function Form (){
    
    
    function handleSubmit(e) {
        // 

        e.preventDefault()
        
        
    }
    
    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="nombre"></label>
            <input type="text" placeholder="Ingresa tu nombre" id="nombre"></input>
            <input type="text" placeholder="Ingresa musica favorita" id="musica"></input>
            <button type="submit">Enviar</button>
            
        </form>
    )

}

export default Form