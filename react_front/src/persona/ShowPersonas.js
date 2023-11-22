import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

//Url que consumirá la API creada en el back
const URL = 'http://localhost:8000/personas'


//Componente funcional
//Hook que me permite gestionar los estados de los componentes funcionales
const ComponentShowPersonas = () =>{
    const [personas, setPersona] = useState([])
    useEffect( ()=>{
        getAllPersonas()
    },[])

    
    //Método que mostrará las personas registradas
    const getAllPersonas = async() =>{


    }

    //Método que eliminará la persona por id
    const deletePersona = async(id) =>{

    }

    //Aquí devuelvo una vista 
    return(
        <div>

        </div>
    )
}

export default ComponentShowPersonas