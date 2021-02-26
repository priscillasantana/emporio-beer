import { action } from 'typesafe-actions'
import { CarrinhoTypes } from './types'

export const setCarrinho = (payload: CarrinhoTypes) => action(CarrinhoTypes.SET_CARRINHO, payload);
