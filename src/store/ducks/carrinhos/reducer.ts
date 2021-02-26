import { Carrinhos, CarrinhoTypes } from './types'



const initialStateCarrinhos: Carrinhos = {
    carrinho: 0,
    titulo: "",
    imagemCarrinho:"",
    valorCarrinho: 0
}

function reducerCarrinho(state = initialStateCarrinhos, action: any) {
    switch(action.type) {
        case CarrinhoTypes.ADD_CARRINHO:
            return {
                ...state,
                carrinho: state.carrinho + 1,
            };
        case CarrinhoTypes.REMOVE_CARRINHO:
            return {
                ...state,
                carrinho: state.carrinho > 0 ? state.carrinho - 1 : state.carrinho,
            }
        case CarrinhoTypes.CLEAN_CARRINHO:
            return {
                ...state,
                carrinho: state.carrinho = 0,
            }
        case CarrinhoTypes.SET_CARRINHO:
            return {
                ...state,
                carrinho: action.payload,
                titulo: action.payload,
                imagemCarrinho: action.payload,
                valorCarrinho: action.payload
            }    
            default:

                return state
    }

}


export default reducerCarrinho;

