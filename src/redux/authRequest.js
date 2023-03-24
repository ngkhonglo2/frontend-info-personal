import axios from 'axios';
import {
    loginStart, 
    loginSuccess, 
    loginFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed,
    registerStart,
    registerSuccess,
    registerFaild,
} from "./authSlice"

export const baseUrl = 'https://be-info-personal.onrender.com'

export const loginUser = async (user, dispatch, navigation, messenger) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(`${baseUrl}/v1/auth/login`, user)
        if(res.status === 200) {
            dispatch(loginSuccess(res.data))
            navigation('/')
        } else {
            navigation('/login')
        }
    } catch(err) {
        dispatch(loginFailed())
        messenger('Tài khoản hoặc mật khẩu không đúng!')
        console.log(err);
    }
}

export const logoutUser = async (accessToken, id, dispatch, navigation) => {
    dispatch(logoutStart())
    try {
        const res = await axios.post(`${baseUrl}/v1/auth/logout`, id, {
            headers: {
                token: `Bearer ${accessToken}`
            }
        })
        if(res.status === 200) {
            dispatch(logoutSuccess())
            navigation('/login')
        } else {
            navigation('/')
        }
    } catch(err) {
        dispatch(logoutFailed())
        console.log(err);
    }
}

export const registerUser = async (newUser, dispatch, navigation, messenger) => {
    dispatch(registerStart())
    try {
        const res = await axios.post(`${baseUrl}/v1/user/register`, newUser)
        if(res.status === 200) {
            dispatch(registerSuccess())
            navigation('/login')
        } else {
            navigation('/register')
        }
    } catch(err) {
        dispatch(registerFaild())
        messenger('Tên tài khoản hoặc email đã tồn tại!')
        console.log(err);
    }
}