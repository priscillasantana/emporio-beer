import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import { Carrinhos, CarrinhoTypes } from '../../store/ducks/carrinhos/types'


function Carrinho() {

    const dispatch = useDispatch()

    const valorCarrinho = useSelector((state: Carrinhos) => state.carrinho)

    return (
        <div>

            <Header />
            
            <h1>Carrinho de compras</h1>

            <button onClick={() => dispatch({ type: CarrinhoTypes.ADD_CARRINHO })}
            >Adicionar no carrinho</button>

            <button onClick={() => dispatch({ type: CarrinhoTypes.REMOVE_CARRINHO })}
            >Retirar do carrinho</button>

            <h2 className='valor'>{valorCarrinho}</h2>


            
        </div>
    )
}


export default Carrinho