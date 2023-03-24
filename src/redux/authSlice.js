import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login: {
        currentUser: null,
        loading: false,
        error: false,
    },
    register: {
        loading: false,
        error: false,
        success: false,
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login
        loginStart: (state) => {
            state.login.loading = true;
        },
        loginSuccess: (state, action) => {
            state.login.loading = false;
            state.login.currentUser = action.payload;
        },
        loginFailed: (state) => {
            state.login.loading = false;
            state.login.error = true;
        },

        // logout
        logoutStart: (state) => {
            state.login.loading = true;
        },
        logoutSuccess: (state) => {
            state.login.currentUser = null;
            state.login.loading = false;
        },
        logoutFailed: (state) => {
            state.login.loading = false;
            state.login.error = true;
        },

        // register
        registerStart: (state) => {
            state.register = {
                ...state, 
                loading: true,
            }
        },
        registerSuccess: (state) => {
            state.register = {
                ...state,
                loading: false,
                success: true,
            } 
        },
        registerFaild: (state) => {
            state.register = {
                ...state,
                loading: false,
                error: true,
            }
        },
    }
})

export const  {
    loginStart,
    loginSuccess,
    loginFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed,
    registerStart,
    registerSuccess,
    registerFaild,
} = authSlice.actions;

export default authSlice.reducer;