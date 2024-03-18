import * as toolkitRaw from '@reduxjs/toolkit';

const { configureStore, createAction, createReducer } = toolkitRaw.default ?? toolkitRaw;

const addToCart = createAction('ADD_TO_CART');
const login = createAction('CREATE_SESSION');

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
});

const loginReducer = createReducer({ status: false }, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
});

const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer,
    },
});

store.subscribe(() => {
    console.log('onChange store: ', store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 12 }));
store.dispatch(addToCart({ id: 2, qty: 22 }));
store.dispatch(login(true));
