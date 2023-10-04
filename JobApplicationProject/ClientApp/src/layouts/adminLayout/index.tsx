import { Navbar } from './../../components'
import { Outlet, useOutlet } from 'react-router-dom'

const AdminLayout = () => {
    const children = useOutlet()
    return (
        <div className='adminLayout'>
            <Navbar />
            <div className='content'>
                <div className='contentLeft'>Lefft</div>
                <div className='contentRight'>{children}</div>
            </div>
        </div>
    )
}

export default AdminLayout
