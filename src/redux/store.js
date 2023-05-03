import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";
import { cartReducer, ordersReducer} from "./reducers/cartReducer";
import {orderReducer } from "./reducers/orderReducer";
import { adminReducer } from "./reducers/adminReducer";



const store = configureStore({
    reducer: {
        auth:authReducer,
        cart:cartReducer,
        order:orderReducer,
        orders:ordersReducer,
        admin:adminReducer,
    },
});


export default store;


export const server ="https://btechburgerwala.onrender.com/api/v1";