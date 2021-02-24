import { action } from 'typesafe-actions'
import { CarrinhoTypes } from './types'

export const getCarrinho = (payload: CarrinhoTypes) => action(CarrinhoTypes.ADD_CARRINHO, payload);
