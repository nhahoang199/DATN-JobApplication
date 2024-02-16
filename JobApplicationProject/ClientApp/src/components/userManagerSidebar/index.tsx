import React, { useEffect, useState } from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody
} from '@material-tailwind/react'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/20/solid'
import { RootState, useAppDispatch } from 'apps/store'
import { useSelector } from 'react-redux'
import { setUserManagerTab } from 'apps/Tabs.slice'
import { NavLink, useNavigate } from 'react-router-dom'

export default function UserManagerSideBar() {
    // const [open, setOpen] = React.useState(0)
    const dispatch = useAppDispatch()
    const userManagerActiveTab = useSelector((state: RootState) => state.activeTab.userManagerActiveTab)
    const userRole = useSelector((state: RootState) => state.auth.user.role)
    const navigate = useNavigate()
    const [redirected, setRedirected] = useState(false)

    useEffect(() => {
        if (!redirected) {
            // Thực hiện chuyển hướng ở đây
            navigate('profile')
            setRedirected(true) // Đặt biến cờ thành true để chỉ chuyển hướng một lần
        }
    }, [navigate, redirected])
    const handleOpen = (value: any) => {
        // setOpen(userManagerActiveTab === value ? 0 : value)
        if (
            (value === 5 && (userManagerActiveTab === 6 || userManagerActiveTab === 7 || userManagerActiveTab === 8)) ||
            (value === 1 && (userManagerActiveTab === 2 || userManagerActiveTab === 3 || userManagerActiveTab === 4))
        ) {
            dispatch(setUserManagerTab(0))
        } else {
            dispatch(setUserManagerTab(userManagerActiveTab === value ? 0 : value))
        }
    }
    return (
        <Card className='h-[calc(100vh-3.6rem)] w-full max-w-[16rem] rounded-none p-1 shadow-xl shadow-blue-gray-900/5'>
            <div className='px-2 py-4 mb-2'>
                <Typography variant='h5' color='blue-gray'>
                    Quản lý
                </Typography>
            </div>
            <List className='p-0'>
                <Accordion
                    open={
                        userManagerActiveTab === 1 ||
                        userManagerActiveTab === 2 ||
                        userManagerActiveTab === 3 ||
                        userManagerActiveTab === 4
                    }
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-0 h-4 w-4 transition-transform ${
                                userManagerActiveTab === 1 ||
                                userManagerActiveTab === 2 ||
                                userManagerActiveTab === 3 ||
                                userManagerActiveTab === 4
                                    ? 'rotate-180'
                                    : ''
                            }`}
                        />
                    }
                >
                    <ListItem className='!py-0 px-0 rounded-md' selected={userManagerActiveTab === 1}>
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className='flex items-center px-2 py-3 border-b-0 rounded-md'
                        >
                            <ListItemPrefix className='mr-2'>
                                <UserCircleIcon className='w-5 h-5' />
                            </ListItemPrefix>
                            <Typography
                                variant='h6'
                                color={
                                    userManagerActiveTab === 1 ||
                                    userManagerActiveTab === 2 ||
                                    userManagerActiveTab === 3 ||
                                    userManagerActiveTab === 4
                                        ? 'blue-gray'
                                        : 'gray'
                                }
                                className={`mr-auto text-sm ${
                                    userManagerActiveTab === 1 ||
                                    userManagerActiveTab === 2 ||
                                    userManagerActiveTab === 3 ||
                                    userManagerActiveTab === 4
                                        ? 'font-semibold'
                                        : 'font-normal'
                                }`}
                            >
                                Hồ sơ của bạn
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className='py-1'>
                        <List className='p-0'>
                            <NavLink to='profile'>
                                <ListItem
                                    className='px-2 text-sm'
                                    selected={userManagerActiveTab === 2}
                                    onClick={() => handleOpen(2)}
                                >
                                    <ListItemPrefix className={`${userManagerActiveTab !== 2 ? 'invisible' : ''} mr-2`}>
                                        <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                                    </ListItemPrefix>
                                    Hồ sơ
                                </ListItem>
                            </NavLink>
                            <NavLink to='cv'>
                                <ListItem
                                    className='px-2 text-sm'
                                    selected={userManagerActiveTab === 3}
                                    onClick={() => handleOpen(3)}
                                >
                                    <ListItemPrefix className={`${userManagerActiveTab !== 3 ? 'invisible' : ''} mr-2`}>
                                        <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                                    </ListItemPrefix>
                                    Quản lý CV
                                </ListItem>
                            </NavLink>
                            {/* <ListItem
                                className='px-2 text-sm'
                                selected={userManagerActiveTab === 4}
                                onClick={() => handleOpen(4)}
                            >
                                <ListItemPrefix className={`${userManagerActiveTab !== 4 ? 'invisible' : ''} mr-2`}>
                                    <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                                </ListItemPrefix>
                                Tiêu chí tìm việc
                            </ListItem> */}
                        </List>
                    </AccordionBody>
                </Accordion>
                {/* <ListItem className='px-2 py-3' selected={userManagerActiveTab === 5} onClick={() => handleOpen(5)}>
                    <ListItemPrefix className='mr-2'>
                        <BuildingOfficeIcon className='w-5 h-5' />
                    </ListItemPrefix>
                    <Typography
                        variant='h6'
                        color={userManagerActiveTab === 5 ? 'blue-gray' : 'gray'}
                        className={`mr-auto text-sm ${userManagerActiveTab === 5 ? 'font-semibold' : 'font-normal'}`}
                    >
                        Công ty của bạn
                    </Typography>
                </ListItem> */}

                <Accordion
                    open={userManagerActiveTab === 5 || userManagerActiveTab === 6 || userManagerActiveTab === 7}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                userManagerActiveTab === 5 || userManagerActiveTab === 6 || userManagerActiveTab === 7
                                    ? 'rotate-180'
                                    : ''
                            }`}
                        />
                    }
                >
                    <ListItem
                        className='p-0 rounded-md'
                        selected={userManagerActiveTab === 5}
                        onClick={() => handleOpen(6)}
                    >
                        <AccordionHeader onClick={() => handleOpen(5)} className='px-2 py-3 border-b-0 rounded-md'>
                            <ListItemPrefix className='mr-2'>
                                <BriefcaseIcon className='w-5 h-5' />
                            </ListItemPrefix>
                            <Typography
                                variant='h6'
                                color={
                                    userManagerActiveTab === 5 ||
                                    userManagerActiveTab === 6 ||
                                    userManagerActiveTab === 7
                                        ? 'blue-gray'
                                        : 'gray'
                                }
                                className={`mr-auto text-sm ${
                                    userManagerActiveTab === 5 ||
                                    userManagerActiveTab === 6 ||
                                    userManagerActiveTab === 7
                                        ? 'font-semibold'
                                        : 'font-normal'
                                }`}
                            >
                                Việc làm
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className='py-1'>
                        <List className='p-0'>
                            {/* <NavLink to='jobcreated'>
                                <ListItem
                                    className='px-2 text-sm'
                                    selected={userManagerActiveTab === 7}
                                    onClick={() => handleOpen(7)}
                                >
                                    <ListItemPrefix className={`${userManagerActiveTab !== 7 ? 'invisible' : ''} mr-2`}>
                                        <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                                    </ListItemPrefix>
                                    Việc làm của công ty bạn
                                </ListItem>
                            </NavLink> */}
                            <NavLink to='appliedjobs'>
                                <ListItem
                                    className='px-2 text-sm'
                                    selected={userManagerActiveTab === 6}
                                    onClick={() => handleOpen(6)}
                                >
                                    <ListItemPrefix className={`${userManagerActiveTab !== 6 ? 'invisible' : ''} mr-2`}>
                                        <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                                    </ListItemPrefix>
                                    Việc làm bạn đã ứng tuyển
                                </ListItem>
                            </NavLink>
                            <NavLink to='savedjobs'>
                                <ListItem
                                    className='px-2 text-sm'
                                    selected={userManagerActiveTab === 7}
                                    onClick={() => handleOpen(7)}
                                >
                                    <ListItemPrefix className={`${userManagerActiveTab !== 7 ? 'invisible' : ''} mr-2`}>
                                        <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                                    </ListItemPrefix>
                                    Việc làm bạn đã lưu
                                </ListItem>
                            </NavLink>
                        </List>
                    </AccordionBody>
                </Accordion>
                {/* <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className='w-5 h-5' />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip value='14' size='sm' variant='ghost' color='blue-gray' className='rounded-full' />
                    </ListItemSuffix>
                </ListItem> */}

                {/* <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className='w-5 h-5' />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className='w-5 h-5' />
                    </ListItemPrefix>
                    Log Out
                </ListItem> */}
            </List>
        </Card>
    )
}
