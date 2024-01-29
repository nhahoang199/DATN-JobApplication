import { NavigationItem } from 'apps/navBar.slice'
import React from 'react'
import { NavLink } from 'react-router-dom'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
function GuestMenu() {
    const navigation = [
        {
            name: 'Đăng nhập',
            current: false,
            href: 'login'
        },
        {
            name: 'Đăng ký',
            current: true,
            href: 'register'
        }
    ]
    return (
        <div className='hidden sm:ml-6 sm:block'>
            <div className='flex space-x-4'>
                {navigation.map((item: NavigationItem, index: number) => (
                    <NavLink
                        key={item.name}
                        to={`/${item.href}`}
                        className={classNames(
                            item.current
                                ? 'bg-gray-100 font-bold text-gray-900 border border-gray-900 hover:bg-gray-700 hover:text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium '
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default GuestMenu
