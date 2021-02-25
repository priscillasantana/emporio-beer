import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.scss'
import { Link } from 'react-router-dom'

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

    return (
        <div className='header'>
            <Link to='/home'><img src="https://www.cupomvalido.com.br/wp-content/uploads/emporio-da-cerveja-logo-1.png" className='logobeer' alt="cerveja" /></Link>
            <Link to='/carrinho'><button className='car'></button></Link>
            <div className="categorias"> <h5> {newCategorias} </h5> </div> 
        </div>
    )
}

export default Header
