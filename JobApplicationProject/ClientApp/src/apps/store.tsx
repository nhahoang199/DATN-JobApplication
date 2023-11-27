import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import authSlice from './auth.slice'
import jobApplicationSlice from './jobApplication.slice'
import loadingSlice from './loading.slice'
import navBarSlice from './navBar.slice'

export const store = configureStore({
    reducer: {
        jobApplication: jobApplicationSlice,
        navigation: navBarSlice,
        auth: authSlice,
        loading: loadingSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
