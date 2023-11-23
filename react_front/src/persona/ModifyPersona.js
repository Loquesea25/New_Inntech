import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = 'http://localhost:8000/personas/'

const ComponentEditPersona = () =>{

    //Componente para modificar persona
    const [name, setName] = useState('')
    const [last_name, setLast_name] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    
    const update = async (event) =>{
        event.preventDefault()
        await axios.put(URL + id, {
            name: name,
            last_name: last_name
        })
        navigate('/')
        
    }

    useEffect( () =>{
        getPersonaById()
    },[])

    const getPersonaById = async () =>{
        const response = await axios.get(URL + id)
        setName(response.data.name)
        setLast_name(response.data.last_name)
        
    } 

    return(
        <div>
             <h3>Modificar persona</h3>

{/* Cuando realice el submit del formulario, la info se guardará en la constante store */}
<form onSubmit={update}>
    <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input 
            value={name}
            // Capturo el valor que se ingresará en el input
            onChange={ (event) => setName(event.target.value)}
            type="text"
            className="form-control"
        ></input>
        </div>
        <div className="mb-3">
        <label className="form-label">Apelido</label>
        <input 
            value={last_name}
            
            onChange={ (event) => setLast_name(event.target.value)}
            type="text"
            className="form-control"
        ></input>
    </div>
    <button type="submit" className="btn btn-primary">Actualizar</button>
</form>
        </div>
    )
}

export default ComponentEditPersona