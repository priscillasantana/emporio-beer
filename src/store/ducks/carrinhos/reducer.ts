import { Carrinhos, CarrinhoTypes } from './types'


const initialStateCarrinhos: Carrinhos = {
    carrinho: 0,
}

function reducerCarrinho(state = initialStateCarrinhos, action: any) {
    switch(action.type) {
        case CarrinhoTypes.ADD_CARRINHO:
            return {
                carrinho: state.carrinho + 1,
            };
        case CarrinhoTypes.REMOVE_CARRINHO:
            return {
                carrinho: state.carrinho > 0 ? state.carrinho - 1 : state.carrinho,
            }
        case CarrinhoTypes.CLEAN_CARRINHO:
            return {
                carrinho: state.carrinho,
            }
            default:
                return state
    }

}


export default reducerCarrinho;

