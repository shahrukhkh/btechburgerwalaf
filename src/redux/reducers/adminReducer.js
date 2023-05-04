import {createReducer} from "@reduxjs/toolkit";

export const adminReducer= createReducer({orders: [], users:[]},{


    getDashboardStatsRequest:(state)=>{
        state.loading =true;
    },
    getDashboardStatsSuccess:(state,action)=>{
        state.loading =false;
        state.usersCount=action.payload.userCount;
        state.ordersCount=action.payload.ordersCount;
        state.totalIncome=action.payload.totalCount;
    },
    getDashboardStatsFail:(state,action)=>{
        state.loading =false;
        state.error=action.payload;
    },
    getAdminUsersRequest:(state)=>{
        state.loading =true;
    },
    getAdminUsersSuccess:(state,action)=>{
        state.loading =false;
        state.users=action.payload;
    },
    getAdminUsersFail:(state,action)=>{
        state.loading =false;
        state.error=action.payload;
    },
    getAdminOrdersRequest:(state)=>{
        state.loading =true;
    },
    getAdminOrdersSuccess:(state,action)=>{
        state.loading =false;
        state.orders=action.payload;
    },
    getAdminOrdersFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    processOrderRequest:(state)=>{
        state.loading =true;
    },
    processOrderSuccess:(state,action)=>{
        state.loading =false;
        state.message=action.payload;
    },
    processOrderFail:(state,action)=>{
        state.loading =false;
        state.error=action.payload;
    },

    clearMessage:(state)=>{
        state.message=null;
    },
    clearError:(state)=>{
        state.error=null;
    },
});