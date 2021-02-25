import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import './home.scss'



function Home () {

    const [bebidas, setBebidas] = useState<string[]>([])
    

    useEffect (() => {
        const token = localStorage.getItem("token")

        const headers = {
            'Authorization': `Bearer ${token}`
        }

            axios.get('http://localhost:4000/beers', {headers: headers})
                .then(resposta => setBebidas(resposta.data))


                
   }, [])


    return (
        <>
         
         <Header />
        <div className="beers-list">
                
            {
                bebidas !== null &&
                bebidas.map((bebida: any) => (
                    <div key={bebida.id} className="beer">
                        
                        <h3>{bebida.title}</h3>
                        <span></span> 
                        <img src={bebida.image} alt={bebida.description} />
                        <p className='price'> {bebida.description}  <br />
                        {bebida.price}
                        </p>
                        
                        <button className="comprar">Comprar</button>
                    </div>

                ))
            }
        </div>
        </>
    )
}

export default Home