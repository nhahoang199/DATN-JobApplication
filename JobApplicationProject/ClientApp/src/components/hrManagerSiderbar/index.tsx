import {
    ChevronDownIcon,
    UserCircleIcon,
    ChevronRightIcon,
    BriefcaseIcon,
    BuildingOfficeIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'
import {
    UserCircleIcon as UserCircleIconSolid,
    BriefcaseIcon as BriefcaseIconSolid,
    BuildingOfficeIcon as BuildingOfficeIconSolid,
    UserGroupIcon as UserGroupIconSolid
} from '@heroicons/react/24/solid'
import {
    Card,
    Typography,
    List,
    Accordion,
    ListItem,
    AccordionHeader,
    ListItemPrefix,
    AccordionBody
} from '@material-tailwind/react'
import { setHRManagerTab } from 'apps/Tabs.slice'
import { useAppDispatch, RootState } from 'apps/store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

function HRManageSideBar() {
    const dispatch = useAppDispatch()
    const hrManagerActiveTab = useSelector((state: RootState) => state.activeTab.hrManagerActiveTab)
    const handleOpen = (value: any) => {
        // setOpen(hrManagerActiveTab === value ? 0 : value)
        if (value === 4 && (hrManagerActiveTab === 5 || hrManagerActiveTab === 6)) {
            dispatch(setHRManagerTab(0))
        } else {
            dispatch(setHRManagerTab(hrManagerActiveTab === value ? 0 : value))
        }
    }
    const navigate = useNavigate()
    const [redirected, setRedirected] = useState(false)

    useEffect(() => {
        if (!redirected) {
            // Thực hiện chuyển hướng ở đây
            navigate('hrprofile')
            setRedirected(true) // Đặt biến cờ thành true để chỉ chuyển hướng một lần
        }
    }, [navigate, redirected])
    return (
        <Card className='h-[calc(100vh-3.6rem)] w-full max-w-[16rem] rounded-none p-1 shadow-xl shadow-blue-gray-900/5'>
            <div className='px-2 py-4 mb-2'>
                <Typography variant='h5' color='blue-gray'>
                    Quản lý
                </Typography>
            </div>
            <List className='p-0'>
                <NavLink to='hrprofile'>
                    <ListItem
                        className='!py-3 px-2 rounded-md'
                        selected={hrManagerActiveTab === 1}
                        onClick={() => handleOpen(1)}
                    >
                        <ListItemPrefix className='mr-2'>
                            {hrManagerActiveTab === 1 ? (
                                <UserCircleIconSolid className='w-5 h-5' />
                            ) : (
                                <UserCircleIcon className='w-5 h-5' />
                            )}
                        </ListItemPrefix>
                        <Typography
                            variant='h6'
                            color={hrManagerActiveTab === 1 ? 'blue-gray' : 'gray'}
                            className={`mr-auto text-sm ${hrManagerActiveTab === 1 ? 'font-semibold' : 'font-normal'}`}
                        >
                            Hồ sơ
                        </Typography>
                    </ListItem>
                </NavLink>

                <NavLink to='companyprofile'>
                    <ListItem className='px-2 py-3' selected={hrManagerActiveTab === 2} onClick={() => handleOpen(2)}>
                        <ListItemPrefix className='mr-2'>
                            {hrManagerActiveTab === 2 ? (
                                <BuildingOfficeIconSolid className='w-5 h-5' />
                            ) : (
                                <BuildingOfficeIcon className='w-5 h-5' />
                            )}
                        </ListItemPrefix>
                        <Typography
                            variant='h6'
                            color={hrManagerActiveTab === 2 ? 'blue-gray' : 'gray'}
                            className={`mr-auto text-sm ${hrManagerActiveTab === 2 ? 'font-semibold' : 'font-normal'}`}
                        >
                            Công ty của bạn
                        </Typography>
                    </ListItem>
                </NavLink>

                <NavLink to='companymember'>
                    <ListItem className='px-2 py-3' selected={hrManagerActiveTab === 3} onClick={() => handleOpen(3)}>
                        <ListItemPrefix className='mr-2'>
                            {hrManagerActiveTab === 3 ? (
                                <UserGroupIconSolid className='w-5 h-5' />
                            ) : (
                                <UserGroupIcon className='w-5 h-5' />
                            )}
                        </ListItemPrefix>
                        <Typography
                            variant='h6'
                            color={hrManagerActiveTab === 3 ? 'blue-gray' : 'gray'}
                            className={`mr-auto text-sm ${hrManagerActiveTab === 3 ? 'font-semibold' : 'font-normal'}`}
                        >
                            Nhân viên
                        </Typography>
                    </ListItem>
                </NavLink>

                <Accordion
                    open={hrManagerActiveTab === 4 || hrManagerActiveTab === 5 || hrManagerActiveTab === 6}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                hrManagerActiveTab === 4 || hrManagerActiveTab === 5 || hrManagerActiveTab === 6
                                    ? 'rotate-180'
                                    : ''
                            }`}
                        />
                    }
                >
                    <ListItem
                        className='p-0 rounded-md'
                        selected={hrManagerActiveTab === 4}
                        onClick={() => handleOpen(4)}
                    >
                        <AccordionHeader onClick={() => handleOpen(4)} className='px-2 py-3 border-b-0 rounded-md'>
                            <ListItemPrefix className='mr-2'>
                                {hrManagerActiveTab === 4 || hrManagerActiveTab === 5 || hrManagerActiveTab === 6 ? (
                                    <BriefcaseIconSolid className='w-5 h-5' />
                                ) : (
                                    <BriefcaseIcon className='w-5 h-5' />
                                )}
                            </ListItemPrefix>
                            <Typography
                                variant='h6'
                                color={
                                    hrManagerActiveTab === 4 || hrManagerActiveTab === 5 || hrManagerActiveTab === 6
                                        ? 'blue-gray'
                                        : 'gray'
                                }
                                className={`mr-auto text-sm ${
                                    hrManagerActiveTab === 4 || hrManagerActiveTab === 5 || hrManagerActiveTab === 6
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
                                    className='px-2 text-sm'
                                    selected={hrManagerActiveTab === 5}
                                    onClick={() => handleOpen(5)}
                                >
                                    <ListItemPrefix className={`${hrManagerActiveTab !== 5 ? 'invisible' : ''} mr-2`}>
                                        <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                                    </ListItemPrefix>
                                    Việc làm công ty bạn
                                </ListItem>
                            </NavLink>
                            <NavLink to='jobapplied'>
                                <ListItem
                                    className='px-2 text-sm'
                                    selected={hrManagerActiveTab === 6}
                                    onClick={() => handleOpen(6)}
                                >
                                    <ListItemPrefix className={`${hrManagerActiveTab !== 6 ? 'invisible' : ''} mr-2`}>
                                        <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                                    </ListItemPrefix>
                                    Đơn ứng tuyển vào công ty
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

export default HRManageSideBar
