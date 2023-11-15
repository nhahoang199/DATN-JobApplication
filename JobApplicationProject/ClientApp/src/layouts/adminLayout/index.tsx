import { useOutlet } from 'react-router-dom'

const AdminLayout = () => {
    const children = useOutlet()
    return (
        <div className='adminLayout'>
            <div className='content'>
                <div className='contentLeft'>Lefft</div>
                <div className='contentRight'>{children}</div>
            </div>
        </div>
    )
}

export default AdminLayout
