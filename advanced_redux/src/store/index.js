import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './card-slice';
import uiSlice from './Ui-slice';

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer }
})

export default store;