import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { myavatar } from 'assets'

const navigation = [
    { name: 'Việc làm', href: '#', current: true },
    { name: 'Hồ sơ & CV', href: '#', current: false },
    { name: 'Công ty', href: '#', current: false }
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as='nav' className={'bg-gray-900'}>
            {({ open }) => (
                <>
                    <div className='mx-auto px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex h-16 items-center justify-between'>
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='absolute -inset-0.5' />
                                    <span className='sr-only'>Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                                    ) : (
                                        <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                                <div className='flex flex-shrink-0 items-center'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width={800}
                                        height={800}
                                        viewBox='0 0 32 32'
                                        xmlSpace='preserve'
                                        className='h-8 w-8'
                                    >
                                        <path
                                            d='M16 2c-.241 0-.482.006-.725.017C7.207 2.397 1 9.347 1 17.424V21a2 2 0 0 0 2 2h.132c.393 2.595 1.731 4 4.868 4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1c-1.942 0-3.194.539-3.959 1.565.413-6.242 5.408-11.447 11.734-11.563L16 5c6.491 0 11.764 5.157 11.98 11.596C27.216 15.551 25.96 15 24 15a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1c3.137 0 4.475-1.405 4.868-4H29a2 2 0 0 0 2-2v-4c0-8.284-6.716-15-15-15zM9 15h1v12H9V15zm14 12h-1V15h1v12zM8 16v10c-2.991 0-4-1.262-4-5s1.009-5 4-5zm16 10V16c2.991 0 4 1.262 4 5s-1.009 5-4 5zm6-5c0 .551-.449 1-1 1v-5c0-7.168-5.832-13-13-13l-.243.002C8.723 4.131 3 10.14 3 17.398V22c-.551 0-1-.449-1-1v-3.576C2 9.696 7.852 3.368 15.322 3.016 15.55 3.005 15.775 3 16 3c7.72 0 14 6.28 14 14v4z'
                                            style={{
                                                fill: '#bdbdbd'
                                            }}
                                        />
                                    </svg>
                                </div>
                                <div className='hidden sm:ml-6 sm:block'>
                                    <div className='flex space-x-4'>
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-800 font-bold text-white'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
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
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                        className={classNames(
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm text-gray-700'
                                                        )}
                                                    >
                                                        Your Profile
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                        className={classNames(
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm text-gray-700'
                                                        )}
                                                    >
                                                        Settings
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                        className={classNames(
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm text-gray-700'
                                                        )}
                                                    >
                                                        Sign out
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className='mx-auto'>
                        <div className='space-y-1 px-2 pb-3 pt-2'>
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as='a'
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
