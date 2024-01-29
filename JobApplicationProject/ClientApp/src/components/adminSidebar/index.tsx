import {
    UserCircleIcon,
    BuildingOfficeIcon,
    UserGroupIcon,
    ChevronDownIcon,
    BriefcaseIcon,
    ChevronRightIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon
} from '@heroicons/react/24/outline'
import {
    UserCircleIcon as UserCircleIconSolid,
    BriefcaseIcon as BriefcaseIconSolid,
    BuildingOfficeIcon as BuildingOfficeIconSolid,
    UserGroupIcon as UserGroupIconSolid,
    Cog6ToothIcon as Cog6ToothIconSolid
} from '@heroicons/react/24/solid'
import {
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Card,
    Typography,
    List,
    Chip,
    ListItemSuffix
} from '@material-tailwind/react'
import { setAdminSidebarTab } from 'apps/Tabs.slice'
import { useAppDispatch, RootState } from 'apps/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function AdminSideBar() {
    const dispatch = useAppDispatch()
    const adminSidebarActiveTab = useSelector((state: RootState) => state.activeTab.adminSidebarActiveTab)
    const handleOpen = (value: any) => {
        // setOpen(adminSidebarActiveTab === value ? 0 : value)
        if (
            (value === 2 && (adminSidebarActiveTab === 3 || adminSidebarActiveTab === 4)) ||
            (value === 5 &&
                (adminSidebarActiveTab === 6 ||
                    adminSidebarActiveTab === 7 ||
                    adminSidebarActiveTab === 8 ||
                    adminSidebarActiveTab === 9))
        ) {
            dispatch(setAdminSidebarTab(0))
        } else {
            dispatch(setAdminSidebarTab(adminSidebarActiveTab === value ? 0 : value))
        }
    }
    return (
        <Card className='h-[calc(100vh-3.6rem)] w-full max-w-[16rem] rounded-none p-1 shadow-xl shadow-blue-gray-900/5'>
            <div className='mb-2 py-4 px-2'>
                <Typography variant='h5' color='blue-gray'>
                    Quản lý hệ thống
                </Typography>
            </div>
            <List className='p-0'>
                <NavLink to='companylist'>
                    <ListItem
                        className='!py-3 px-2 rounded-md'
                        selected={adminSidebarActiveTab === 1}
                        onClick={() => handleOpen(1)}
                    >
                        <ListItemPrefix className='mr-2'>
                            {adminSidebarActiveTab === 1 ? (
                                <BuildingOfficeIconSolid className='h-5 w-5' />
                            ) : (
                                <BuildingOfficeIcon className='h-5 w-5' />
                            )}
                        </ListItemPrefix>
                        <Typography
                            variant='h6'
                            color={adminSidebarActiveTab === 1 ? 'blue-gray' : 'gray'}
                            className={`mr-auto text-sm ${
                                adminSidebarActiveTab === 1 ? 'font-semibold' : 'font-normal'
                            }`}
                        >
                            Doanh nghiệp
                        </Typography>
                    </ListItem>
                </NavLink>
                <Accordion
                    open={adminSidebarActiveTab === 2 || adminSidebarActiveTab === 3 || adminSidebarActiveTab === 4}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                adminSidebarActiveTab === 2 ||
                                adminSidebarActiveTab === 3 ||
                                adminSidebarActiveTab === 4
                                    ? 'rotate-180'
                                    : ''
                            }`}
                        />
                    }
                >
                    <ListItem
                        className='p-0 rounded-md'
                        selected={adminSidebarActiveTab === 2}
                        onClick={() => handleOpen(2)}
                    >
                        <AccordionHeader onClick={() => handleOpen(2)} className='border-b-0 px-2 py-3 rounded-md'>
                            <ListItemPrefix className='mr-2'>
                                {adminSidebarActiveTab === 2 ||
                                adminSidebarActiveTab === 3 ||
                                adminSidebarActiveTab === 4 ? (
                                    <UserGroupIconSolid className='h-5 w-5' />
                                ) : (
                                    <UserGroupIcon className='h-5 w-5' />
                                )}
                            </ListItemPrefix>
                            <Typography
                                variant='h6'
                                color={
                                    adminSidebarActiveTab === 2 ||
                                    adminSidebarActiveTab === 3 ||
                                    adminSidebarActiveTab === 4
                                        ? 'blue-gray'
                                        : 'gray'
                                }
                                className={`mr-auto text-sm ${
                                    adminSidebarActiveTab === 2 ||
                                    adminSidebarActiveTab === 3 ||
                                    adminSidebarActiveTab === 4
                                        ? 'font-semibold'
                                        : 'font-normal'
                                }`}
                            >
                                Người dùng
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className='py-1'>
                        <List className='p-0'>
                            <NavLink to='basicuserlist'>
                                <ListItem
                                    className='text-sm px-2'
                                    selected={adminSidebarActiveTab === 3}
                                    onClick={() => handleOpen(3)}
                                >
                                    <ListItemPrefix
                                        className={`${adminSidebarActiveTab !== 3 ? 'invisible' : ''} mr-2`}
                                    >
                                        <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                    </ListItemPrefix>
                                    Người dùng cơ bản
                                </ListItem>
                            </NavLink>
                            <NavLink to='hruserlist'>
                                <ListItem
                                    className='text-sm px-2'
                                    selected={adminSidebarActiveTab === 4}
                                    onClick={() => handleOpen(4)}
                                >
                                    <ListItemPrefix
                                        className={`${adminSidebarActiveTab !== 4 ? 'invisible' : ''} mr-2`}
                                    >
                                        <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                    </ListItemPrefix>
                                    Nhân sự
                                </ListItem>
                            </NavLink>
                        </List>
                    </AccordionBody>
                </Accordion>

                {/* <NavLink to='ber'>
                    <ListItem
                        className='py-3 px-2'
                        selected={adminSidebarActiveTab === 3}
                        onClick={() => handleOpen(3)}
                    >
                        <ListItemPrefix className='mr-2'>
                            {adminSidebarActiveTab === 3 ? (
                                <UserGroupIconSolid className='h-5 w-5' />
                            ) : (
                                <UserGroupIcon className='h-5 w-5' />
                            )}
                        </ListItemPrefix>
                        <Typography
                            variant='h6'
                            color={adminSidebarActiveTab === 3 ? 'blue-gray' : 'gray'}
                            className={`mr-auto text-sm ${
                                adminSidebarActiveTab === 3 ? 'font-semibold' : 'font-normal'
                            }`}
                        >
                            Nhân viên
                        </Typography>
                    </ListItem>
                </NavLink> */}
                <Accordion
                    open={
                        adminSidebarActiveTab === 5 ||
                        adminSidebarActiveTab === 6 ||
                        adminSidebarActiveTab === 7 ||
                        adminSidebarActiveTab === 8 ||
                        adminSidebarActiveTab === 9
                    }
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                adminSidebarActiveTab === 5 ||
                                adminSidebarActiveTab === 6 ||
                                adminSidebarActiveTab === 7 ||
                                adminSidebarActiveTab === 8 ||
                                adminSidebarActiveTab === 9
                                    ? 'rotate-180'
                                    : ''
                            }`}
                        />
                    }
                >
                    <ListItem
                        className='p-0 rounded-md'
                        selected={adminSidebarActiveTab === 5}
                        onClick={() => handleOpen(5)}
                    >
                        <AccordionHeader onClick={() => handleOpen(5)} className='border-b-0 px-2 py-3 rounded-md'>
                            <ListItemPrefix className='mr-2'>
                                {adminSidebarActiveTab === 5 ||
                                adminSidebarActiveTab === 6 ||
                                adminSidebarActiveTab === 7 ||
                                adminSidebarActiveTab === 8 ||
                                adminSidebarActiveTab === 9 ? (
                                    <Cog6ToothIconSolid className='h-5 w-5' />
                                ) : (
                                    <Cog6ToothIcon className='h-5 w-5' />
                                )}
                            </ListItemPrefix>
                            <Typography
                                variant='h6'
                                color={
                                    adminSidebarActiveTab === 5 ||
                                    adminSidebarActiveTab === 6 ||
                                    adminSidebarActiveTab === 7 ||
                                    adminSidebarActiveTab === 8 ||
                                    adminSidebarActiveTab === 9
                                        ? 'blue-gray'
                                        : 'gray'
                                }
                                className={`mr-auto text-sm ${
                                    adminSidebarActiveTab === 5 ||
                                    adminSidebarActiveTab === 6 ||
                                    adminSidebarActiveTab === 7 ||
                                    adminSidebarActiveTab === 8 ||
                                    adminSidebarActiveTab === 9
                                        ? 'font-semibold'
                                        : 'font-normal'
                                }`}
                            >
                                Cài đặt
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className='py-1'>
                        <List className='p-0'>
                            <NavLink to='countrylist'>
                                <ListItem
                                    className='text-sm px-2'
                                    selected={adminSidebarActiveTab === 6}
                                    onClick={() => handleOpen(6)}
                                >
                                    <ListItemPrefix
                                        className={`${adminSidebarActiveTab !== 6 ? 'invisible' : ''} mr-2`}
                                    >
                                        <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                    </ListItemPrefix>
                                    Quốc gia
                                </ListItem>
                            </NavLink>
                            <NavLink to='provincelist'>
                                <ListItem
                                    className='text-sm px-2'
                                    selected={adminSidebarActiveTab === 7}
                                    onClick={() => handleOpen(7)}
                                >
                                    <ListItemPrefix
                                        className={`${adminSidebarActiveTab !== 7 ? 'invisible' : ''} mr-2`}
                                    >
                                        <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                    </ListItemPrefix>
                                    Tỉnh / Thành phố
                                </ListItem>
                            </NavLink>
                            <NavLink to='districtlist'>
                                <ListItem
                                    className='text-sm px-2'
                                    selected={adminSidebarActiveTab === 8}
                                    onClick={() => handleOpen(8)}
                                >
                                    <ListItemPrefix
                                        className={`${adminSidebarActiveTab !== 8 ? 'invisible' : ''} mr-2`}
                                    >
                                        <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                    </ListItemPrefix>
                                    Quận / Huyện
                                </ListItem>
                            </NavLink>
                            <NavLink to='communelist'>
                                <ListItem
                                    className='text-sm px-2'
                                    selected={adminSidebarActiveTab === 9}
                                    onClick={() => handleOpen(9)}
                                >
                                    <ListItemPrefix
                                        className={`${adminSidebarActiveTab !== 9 ? 'invisible' : ''} mr-2`}
                                    >
                                        <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                                    </ListItemPrefix>
                                    Phường / Xã
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
                </ListItem>
                *{' '}
                <ListItem>
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

export default AdminSideBar
