export enum CarrinhoTypes {
    ADD_CARRINHO = 'ADD_CARRINHO',
    REMOVE_CARRINHO = 'REMOVE_CARRINHO',
    CLEAN_CARRINHO = 'CLEAN_CARRINHO',
    SET_CARRINHO = 'SET_CARRINHO'
}

export interface Carrinhos {
    carrinho: any,
    titulo: string,
    imagemCarrinho: string,
    valorCarrinho: number
}

