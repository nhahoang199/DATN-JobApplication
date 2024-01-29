import { XMarkIcon } from '@heroicons/react/24/outline'
import { DialogBody, IconButton, DialogFooter, Dialog, Typography, Button } from '@material-tailwind/react'
import { setOpenEditBackgroundImage } from 'apps/companyProfile.slice'
import { RootState, useAppDispatch } from 'apps/store'
import React from 'react'
import { useSelector } from 'react-redux'

function EditCompanyBackgroundPicture() {
    const openPreviewImage = useSelector((state: RootState) => state.companyProfileSlice.openEditBackgroundImage)
    const srcImage = useSelector((state: RootState) => state.companyProfileSlice.srcBackgroundImage)
    const dispatch = useAppDispatch()
    return (
        <Dialog
            size='md'
            open={openPreviewImage}
            handler={() => dispatch(setOpenEditBackgroundImage(openPreviewImage))}
            className='p-0'
        >
            <DialogBody className='relative'>
                <div className='mb-1 flex flex-col gap-4 w-full'>
                    <Typography variant='h6' color='blue-gray' className='mb-4'>
                        Thay đổi ảnh bìa
                    </Typography>
                    <div className='flex flex-col gap-y-5 w-full'>
                        {' '}
                        <div className='flex flex-col justify-start gap-y-5'>
                            <div className='flex flex-row gap-x-2'>
                                <label
                                    htmlFor='company-avatar'
                                    className='rounded-sm px-6 !bg-gold-900 flex items-center justify-center text-gray-100 cursor-pointer hover:'
                                >
                                    Thay đổi
                                    <input type='file' id='company-avatar' className='hidden' />
                                </label>
                                <Button
                                    size='sm'
                                    variant='outlined'
                                    // onClick={() => dispatch(setOpenEditUser(false))}
                                    className='rounded-sm'
                                >
                                    Xóa
                                </Button>
                            </div>
                            <Typography variant='paragraph' color='blue-gray' className='text-gray-600'>
                                Tối đa 100kb (.png, .jpg, .jpeg)
                            </Typography>
                        </div>
                    </div>
                    <div className='max-h-350'>
                        <img
                            src={srcImage}
                            alt='backgroundPicture'
                            className='h-full w-full max-h-350  object-cover object-center '
                        />
                    </div>
                </div>
                <IconButton
                    variant='text'
                    // size='sm'
                    ripple={false}
                    className='absolute right-2 top-2 rounded-lg w-10 h-10 bg-gray-50/50 flex items-center justify-center cursor-pointer hover:scale-105 duration-200 hover:text-gray-900 z-20 hover:bg-gray-50'
                    onClick={() => dispatch(setOpenEditBackgroundImage(false))}
                >
                    <XMarkIcon className='w-6 h-6 text-blue-gray-800' />
                </IconButton>
            </DialogBody>
            <DialogFooter className='gap-4'>
                <Button size='sm' className='rounded-sm px-6'>
                    Lưu
                </Button>
                <Button
                    size='sm'
                    variant='outlined'
                    onClick={() => dispatch(setOpenEditBackgroundImage(false))}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default EditCompanyBackgroundPicture
