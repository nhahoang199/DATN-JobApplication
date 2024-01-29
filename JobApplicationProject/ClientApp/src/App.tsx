import { RouterProvider } from 'react-router-dom'
import './App.scss'
import router from './routes/routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DialogContainer, LoadingProgress } from 'pages'
import { useEffect } from 'react'
import { RootState, useAppDispatch } from 'apps/store'
import { getMeAsync } from 'apps/auth.slice'
import { useSelector } from 'react-redux'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

function App() {
    const dispatch = useAppDispatch()
    // const loginStatus = useSelector((state: RootState) => state.auth.loginStatus)
    // useEffect(() => {
    //     dispatch(getMeAsync(jwt || ''))
    // }, [dispatch, jwt])
    useEffect(() => {
        const jwt = localStorage.getItem('jwt')
        if (jwt) dispatch(getMeAsync())
        const handleStorageChange = (event: StorageEvent) => {
            if (event.storageArea === window.localStorage) {
                dispatch(getMeAsync())
            }
        }
        window.addEventListener('storage', handleStorageChange)
        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [dispatch])
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <RouterProvider router={router} />
            <LoadingProgress />
            <ToastContainer />
            <DialogContainer />
        </LocalizationProvider>
    )
}
export default App
