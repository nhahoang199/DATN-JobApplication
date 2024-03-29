import { Navbar, Footer } from './../../components'
import { useOutlet } from 'react-router-dom'

const UserLayout = () => {
    const children = useOutlet()
    return (
        <div className='userLayout scroll-smooth'>
            <Navbar />
            <div className='bg-gray-100 content mt-14'>{children}</div>
            <Footer />
        </div>
    )
}

export default UserLayout
