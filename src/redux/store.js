// eslint-disable-next-line no-unused-vars
import { createStore } from 'redux';
import reducer from './reducer/reducer';

let store = createStore(reducer);

export default store;
