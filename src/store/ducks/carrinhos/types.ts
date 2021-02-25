export enum CarrinhoTypes {
    ADD_CARRINHO = 'ADD_CARRINHO',
    REMOVE_CARRINHO = 'REMOVE_CARRINHO',
    CLEAN_CARRINHO = 'CLEAN_CARRINHO',
    GET_CARRINHO = 'GET_CARRINHO'
}

export interface Carrinhos {
    carrinho: any,
    qtdCarrinho: number,
    imagemCarrinho: string,
    valorCarrinho: number
}

