import * as toolkitRaw from '@reduxjs/toolkit';

const { configureStore, createSlice } = toolkitRaw.default ?? toolkitRaw;

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
    },
});
//console.log('oncreate slice: ', cartSlice);

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});
console.log('onCreate store: ', store.getState());

store.subscribe(() => {
    console.log('onChange store: ', store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 12 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 22 }));
