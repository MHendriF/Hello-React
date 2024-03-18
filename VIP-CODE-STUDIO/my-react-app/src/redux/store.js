import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

const store = configureStore({
    reducer: { cart: cartReducer },
});
console.log('onCreate store: ', store.getState());

store.subscribe(() => {
    console.log('onChange store: ', store.getState());
});

export default store;
