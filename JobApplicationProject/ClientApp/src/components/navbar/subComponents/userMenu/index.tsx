import { Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { logOutAsync } from 'apps/auth.slice'
import { hideProgressLoading, showProgressLoading } from 'apps/loading.slice'
import { useAppDispatch } from 'apps/store'
import { myavatar } from 'assets'
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
function UserMenu() {
    const data = [
        {
            name: 'Hồ sơ của bạn',
            href: 'my-profile'
        },
        {
            name: 'Quản lý việc làm',
            href: 'manager-jobs'
        }
    ]
    const dispatch = useAppDispatch()
    const handleOnClick = async () => {
        dispatch(showProgressLoading('Đang đăng xuất'))
        await dispatch(logOutAsync())
        dispatch(hideProgressLoading())
    }
    return (
        <>
            <button
                type='button'
                className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
            >
                <span className='absolute -inset-1.5' />
                <span className='sr-only'>View notifications</span>
                <BellIcon className='h-6 w-6' aria-hidden='true' />
            </button>

            <Menu as='div' className='relative ml-3'>
                <div>
                    <Menu.Button className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                        <span className='absolute -inset-1.5' />
                        <span className='sr-only'>Open user menu</span>
                        <img className='h-8 w-8 rounded-full' src={myavatar} alt='' />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        {data.map((item, key) => {
                            return (
                                <Menu.Item key={key}>
                                    {({ active }) => (
                                        <NavLink to={item.href}>
                                            <div
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                                                )}
                                            >
                                                {item.name}
                                            </div>
                                        </NavLink>
                                    )}
                                </Menu.Item>
                            )
                        })}
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                                    )}
                                    onClick={handleOnClick}
                                >
                                    Đăng xuất
                                </div>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}

export default UserMenu
