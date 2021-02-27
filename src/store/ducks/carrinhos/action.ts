import { action } from 'typesafe-actions'
import { CarrinhoTypes } from './types'

export const setCarrinho = (payload: any) => action(CarrinhoTypes.SET_CARRINHO, payload);
export const addCarrinho = () => action(CarrinhoTypes.ADD_CARRINHO);
export const cleanCarrinho = () => action(CarrinhoTypes.CLEAN_CARRINHO);


