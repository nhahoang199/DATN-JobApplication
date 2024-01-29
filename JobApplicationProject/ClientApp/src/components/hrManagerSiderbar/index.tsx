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
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

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
    return (
        <Card className='h-[calc(100vh-3.6rem)] w-full max-w-[16rem] rounded-none p-1 shadow-xl shadow-blue-gray-900/5'>
            <div className='mb-2 py-4 px-2'>
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
                                <UserCircleIconSolid className='h-5 w-5' />
                            ) : (
                                <UserCircleIcon className='h-5 w-5' />
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
                    <ListItem className='py-3 px-2' selected={hrManagerActiveTab === 2} onClick={() => handleOpen(2)}>
                        <ListItemPrefix className='mr-2'>
                            {hrManagerActiveTab === 2 ? (
                                <BuildingOfficeIconSolid className='h-5 w-5' />
                            ) : (
                                <BuildingOfficeIcon className='h-5 w-5' />
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
                    <ListItem className='py-3 px-2' selected={hrManagerActiveTab === 3} onClick={() => handleOpen(3)}>
                        <ListItemPrefix className='mr-2'>
                            {hrManagerActiveTab === 3 ? (
                                <UserGroupIconSolid className='h-5 w-5' />
                            ) : (
                                <UserGroupIcon className='h-5 w-5' />
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
                        <AccordionHeader onClick={() => handleOpen(4)} className='border-b-0 px-2 py-3 rounded-md'>
                            <ListItemPrefix className='mr-2'>
                                {hrManagerActiveTab === 4 || hrManagerActiveTab === 5 || hrManagerActiveTab === 6 ? (
                                    <BriefcaseIconSolid className='h-5 w-5' />
                                ) : (
                                    <BriefcaseIcon className='h-5 w-5' />
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
                                    className='text-sm px-2'
                                    selected={hrManagerActiveTab === 5}
                                    onClick={() => handleOpen(5)}
                                >
                                    <ListItemPrefix className={`${hrManagerActiveTab !== 5 ? 'invisible' : ''} mr-2`}>
                                        <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                    </ListItemPrefix>
                                    Việc làm công ty bạn
                                </ListItem>
                            </NavLink>
                            <NavLink to='jobapplied'>
                                <ListItem
                                    className='text-sm px-2'
                                    selected={hrManagerActiveTab === 6}
                                    onClick={() => handleOpen(6)}
                                >
                                    <ListItemPrefix className={`${hrManagerActiveTab !== 6 ? 'invisible' : ''} mr-2`}>
                                        <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                    </ListItemPrefix>
                                    Đơn ứng tuyển vào công ty
                                </ListItem>
                            </NavLink>
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

export default HRManageSideBar
