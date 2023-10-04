import './index.scss'
import { Navbar } from './../../components'
import { useOutlet } from 'react-router-dom'

const UserLayout = () => {
    const children = useOutlet()
    return (
        <div className='userLayout'>
            <Navbar />
            <div className='content'>{children}</div>
        </div>
    )
}

export default UserLayout
