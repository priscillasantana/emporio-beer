import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import { Carrinhos, CarrinhoTypes } from '../../store/ducks/carrinhos/types'
import './style.scss'


function Carrinho() {

    const dispatch = useDispatch()

    const valorCarrinho = useSelector((state: Carrinhos) => state.carrinho)

    return (
        <>

            <Header />
            <div className='caixaCarrinho'>
                <h1 className='carro'>Carrinho de compras</h1>

                <h2 className='valor'>{valorCarrinho}</h2>

                <button className='btn btn-white btn-animated' onClick={() => dispatch({ type: CarrinhoTypes.ADD_CARRINHO })}
                >Adicionar no carrinho</button>

                <button className='btn btn-white btn-animated' onClick={() => dispatch({ type: CarrinhoTypes.REMOVE_CARRINHO })}
                >Retirar do carrinho</button>

                <button className='btn btn-white btn-animated' onClick={() => dispatch({ type: CarrinhoTypes.CLEAN_CARRINHO })}
                >Esvaziar carrinho</button>

                
            </div>

        </>
    )
}


export default Carrinho