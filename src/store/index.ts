import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerCarrinho from '../store/ducks/carrinhos/reducer'


const store = createStore(reducerCarrinho, composeWithDevTools())

export { store };