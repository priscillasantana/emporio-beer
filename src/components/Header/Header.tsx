import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.scss'
import { Redirect } from 'react-router-dom'

function Header() {

    const [categorias, setCategorias] = useState<String[]>([])

    useEffect (() =>{

        const token = localStorage.getItem("token")
    

    const header = {
        'Authorization': `Bearer ${token}`
    }

    axios.get('http://localhost:4000/categories', {headers: header})
                .then(resposta => setCategorias(resposta.data))

    }, [])
    
    let newCategorias = categorias.join(" - ")

    let imageClick = () => (<Redirect to="/carrinho" />)

    return (
        <div className='header'>
            <img src="https://www.cupomvalido.com.br/wp-content/uploads/emporio-da-cerveja-logo-1.png" className='logobeer' alt="cerveja" />
            <img onClick={imageClick} src="https://i.pinimg.com/474x/2a/62/3b/2a623b43e5e2550655d5c87e924a893d.jpg" className='carrinho' alt="carrinho" />
            <div className="categorias"> <h5> {newCategorias} </h5> </div> 
        </div>
    )
}

export default Header
