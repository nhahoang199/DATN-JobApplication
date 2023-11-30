import { RouterProvider } from 'react-router-dom'
import './App.scss'
import router from './routes/routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LoadingProgress } from 'pages'
import { useEffect } from 'react'
import { RootState, useAppDispatch } from 'apps/store'
import { getMeAsync } from 'apps/auth.slice'
import { useSelector } from 'react-redux'

function App() {
    const dispatch = useAppDispatch()
    const jwt = localStorage.getItem('jwt')
    const loginStatus = useSelector((state: RootState) => state.auth.loginStatus)
    // useEffect(() => {
    //     dispatch(getMeAsync(jwt || ''))
    // }, [dispatch, jwt])
    useEffect(() => {
        if (jwt) dispatch(getMeAsync())
        const handleStorageChange = (event: StorageEvent) => {
            if (event.storageArea === window.localStorage) {
                dispatch(getMeAsync())
            }
        }
        window.addEventListener('storage', handleStorageChange)
        console.log('app use effect')
        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [dispatch, jwt])
    return (
        <>
            <RouterProvider router={router} />
            <LoadingProgress />
            <ToastContainer />
        </>
    )
}
export default App
