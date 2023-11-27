import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMeAPI, logInAPI, logOutAPI } from 'apis/authAPI'
import { loginParams } from 'types'
import { toastError, toastSuccess } from 'utils/function'

export interface authState {
    user: any[]
    isGuest: boolean
    loginStatus: string
    logOutStatus: string
    getMeStatus: string
    getMeError: string | null
    logOutError: string | null
    loginError: string | null // Allow null for the error property
    emailNotFound: boolean
    wrongPassword: boolean
}
const initialState: authState = {
    user: [],
    isGuest: true,
    loginStatus: 'idle',
    logOutStatus: 'idle',
    getMeStatus: 'idle',
    getMeError: null,
    loginError: null,
    logOutError: null,
    emailNotFound: false,
    wrongPassword: false
}
// Định nghĩa một async thunk sử dụng createAsyncThunk
const loginAsync = createAsyncThunk('Auth/loginAsync', async (loginParams: loginParams) => {
    try {
        const response = await logInAPI(loginParams)
        return response.data
    } catch (error: any) {
        const errorMessage = error.response?.data?.error || 'Something went wrong'
        if (errorMessage.includes('Email Not Found')) {
            throw new Error('Email Not Found')
        } else if (errorMessage.includes('Wrong Password')) {
            throw new Error('Wrong Password')
        } else {
            throw error
        }
    }
})
const getMeAsync = createAsyncThunk('Auth/getMeAsync', async (token: string) => {
    const response = await getMeAPI(token)
    return response.data
})
const logOutAsync = createAsyncThunk('Auth/logOutAsync', async () => {
    return await logOutAPI()
})
const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state: any) => {
                state.loginStatus = 'loading'
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loginStatus = 'failed'
                state.loginError = action.error.message ?? 'Đăng nhập thất bại'
                if (action.error.message === 'Email không tồn tại') {
                    state.emailNotFound = true
                } else if (action.error.message === 'Sai mật khẩu') {
                    state.wrongPassword = true
                }
                toastError(state.loginError)
            })
            .addCase(loginAsync.fulfilled, (state: any, action) => {
                state.loginStatus = 'succeeded'
                // state.data = action.payload
                localStorage.setItem('jwt', action.payload)
                state.emailNotFound = false
                state.wrongPassword = false
                toastSuccess('Đăng nhập thành công')
            })
            .addCase(getMeAsync.pending, (state: any) => {
                state.getMeStatus = 'loading'
            })
            .addCase(getMeAsync.fulfilled, (state: any, action) => {
                state.getMeStatus = 'succeeded'
                state.user = action.payload
                state.isGuest = false
            })
            .addCase(getMeAsync.rejected, (state, action) => {
                state.getMeStatus = 'failed'
                state.getMeError = action.error.message ?? null
            })
            .addCase(logOutAsync.pending, (state: any) => {
                state.logOutStatus = 'loading'
            })
            .addCase(logOutAsync.fulfilled, (state: any, action) => {
                state.logOutStatus = 'succeeded'
                state.isGuest = true
                localStorage.removeItem('jwt')
                toastSuccess('Đăng xuất thành công')
            })
            .addCase(logOutAsync.rejected, (state, action) => {
                state.logOutStatus = 'failed'
                state.logOutError = action.error.message ?? 'Đăng xuất thất bại'
                toastError(state.logOutError)
            })
    }
})

export default authSlice.reducer
export { loginAsync, getMeAsync, logOutAsync }
