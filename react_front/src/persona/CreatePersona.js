import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = 'http://localhost:8000/personas/'

const ComponentCreatePersona = () =>{

    //Componente para crear nueva persona
    const [name, setName] = useState('')
    const [last_name, setLast_name] = useState('')
    const navigate = useNavigate()

    const store = async (event) =>{
        //Con preventDefault evito el submit del formulario y así me regresa a la pantalla principal
        event.preventDefault()
        await axios.post(URL, {name: name, last_name: last_name})
        navigate('/')
        
    }

    return(
        <div>
            <h3>Crear nuevo registro de persona</h3>

            {/* Cuando realice el submit del formulario, la info se guardará en la constante store */}
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                        value={name}
                        // Capturo el valor que se ingresará en el input
                        onChange={ (event) => setName(event.target.value)}
                        type="text"
                        className="form-control"
                    ></input>

                    <label className="form-label">Apelido</label>
                    <input 
                        value={last_name}
                        
                        onChange={ (event) => setLast_name(event.target.value)}
                        type="text"
                        className="form-control"
                    ></input>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )
}

export default ComponentCreatePersona