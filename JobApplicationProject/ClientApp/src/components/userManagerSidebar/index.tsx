import React from 'react'
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
import { BriefcaseIcon, BuildingOfficeIcon } from '@heroicons/react/20/solid'
import { RootState, useAppDispatch } from 'apps/store'
import { useSelector } from 'react-redux'
import { setUserManagerTab } from 'apps/Tabs.slice'
import { NavLink } from 'react-router-dom'

export default function UserManagerSideBar() {
    // const [open, setOpen] = React.useState(0)
    const dispatch = useAppDispatch()
    const userManagerActiveTab = useSelector((state: RootState) => state.activeTab.userManagerActiveTab)
    const handleOpen = (value: any) => {
        // setOpen(userManagerActiveTab === value ? 0 : value)
        if (
            (value === 6 && (userManagerActiveTab === 7 || userManagerActiveTab === 8 || userManagerActiveTab === 9)) ||
            (value === 1 && (userManagerActiveTab === 2 || userManagerActiveTab === 3 || userManagerActiveTab === 4))
        ) {
            dispatch(setUserManagerTab(0))
        } else {
            dispatch(setUserManagerTab(userManagerActiveTab === value ? 0 : value))
        }
    }

    return (
        <Card className='h-[calc(100vh-3.6rem)] w-full max-w-[16rem] rounded-none p-2 shadow-xl shadow-blue-gray-900/5'>
            <div className='mb-2 py-4 px-2'>
                <Typography variant='h5' color='blue-gray'>
                    Quản lý
                </Typography>
            </div>
            <List>
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
                            className={`mx-auto h-4 w-4 transition-transform ${
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
                    <ListItem className='!py-0 px-0' selected={userManagerActiveTab === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className='border-b-0 px-1 py-3 rounded-md'>
                            <ListItemPrefix className='mr-2'>
                                <UserCircleIcon className='h-5 w-5' />
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
                                className={`mr-auto ${
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
                                    className='text-sm px-1'
                                    selected={userManagerActiveTab === 2}
                                    onClick={() => handleOpen(2)}
                                >
                                    <ListItemPrefix className='mr-2'>
                                        <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                    </ListItemPrefix>
                                    Hồ sơ
                                </ListItem>
                            </NavLink>
                            <ListItem
                                className='text-sm px-1'
                                selected={userManagerActiveTab === 3}
                                onClick={() => handleOpen(3)}
                            >
                                <ListItemPrefix className='mr-2'>
                                    <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                </ListItemPrefix>
                                Quản lý CV
                            </ListItem>
                            <ListItem
                                className='text-sm px-1'
                                selected={userManagerActiveTab === 4}
                                onClick={() => handleOpen(4)}
                            >
                                <ListItemPrefix className='mr-2'>
                                    <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                </ListItemPrefix>
                                Tiêu chí tìm việc
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <ListItem className='py-3 px-1' selected={userManagerActiveTab === 5} onClick={() => handleOpen(5)}>
                    <ListItemPrefix className='mr-2'>
                        <BuildingOfficeIcon className='h-5 w-5' />
                    </ListItemPrefix>
                    <Typography
                        variant='h6'
                        color={userManagerActiveTab === 5 ? 'blue-gray' : 'gray'}
                        className={`mr-auto ${userManagerActiveTab === 5 ? 'font-semibold' : 'font-normal'}`}
                    >
                        Công ty của bạn
                    </Typography>
                </ListItem>

                <Accordion
                    open={
                        userManagerActiveTab === 6 ||
                        userManagerActiveTab === 7 ||
                        userManagerActiveTab === 8 ||
                        userManagerActiveTab === 9
                    }
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                userManagerActiveTab === 6 ||
                                userManagerActiveTab === 7 ||
                                userManagerActiveTab === 8 ||
                                userManagerActiveTab === 9
                                    ? 'rotate-180'
                                    : ''
                            }`}
                        />
                    }
                >
                    <ListItem className='p-0' selected={userManagerActiveTab === 6} onClick={() => handleOpen(6)}>
                        <AccordionHeader onClick={() => handleOpen(6)} className='border-b-0 px-1 py-3 rounded-md'>
                            <ListItemPrefix className='mr-2'>
                                <BriefcaseIcon className='h-5 w-5' />
                            </ListItemPrefix>
                            <Typography
                                variant='h6'
                                color={
                                    userManagerActiveTab === 6 ||
                                    userManagerActiveTab === 7 ||
                                    userManagerActiveTab === 8 ||
                                    userManagerActiveTab === 9
                                        ? 'blue-gray'
                                        : 'gray'
                                }
                                className={`mr-auto ${
                                    userManagerActiveTab === 6 ||
                                    userManagerActiveTab === 7 ||
                                    userManagerActiveTab === 8 ||
                                    userManagerActiveTab === 9
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
                            <NavLink to='jobcreated'>
                                <ListItem
                                    className='text-sm px-1'
                                    selected={userManagerActiveTab === 7}
                                    onClick={() => handleOpen(7)}
                                >
                                    <ListItemPrefix className='mr-2'>
                                        <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                    </ListItemPrefix>
                                    Việc làm của công ty bạn
                                </ListItem>
                            </NavLink>
                            <ListItem
                                className='text-sm px-1'
                                selected={userManagerActiveTab === 8}
                                onClick={() => handleOpen(8)}
                            >
                                <ListItemPrefix className='mr-2'>
                                    <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                </ListItemPrefix>
                                Việc làm bạn đã ứng tuyển
                            </ListItem>
                            <ListItem
                                className='text-sm px-1'
                                selected={userManagerActiveTab === 9}
                                onClick={() => handleOpen(9)}
                            >
                                <ListItemPrefix className='mr-2'>
                                    <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                </ListItemPrefix>
                                Việc làm bạn đã lưu
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                {/* <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className='h-5 w-5' />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip value='14' size='sm' variant='ghost' color='blue-gray' className='rounded-full' />
                    </ListItemSuffix>
                </ListItem> */}

                {/* <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className='h-5 w-5' />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className='h-5 w-5' />
                    </ListItemPrefix>
                    Log Out
                </ListItem> */}
            </List>
        </Card>
    )
}