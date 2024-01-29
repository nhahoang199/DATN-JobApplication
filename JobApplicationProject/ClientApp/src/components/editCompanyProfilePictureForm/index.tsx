import { XMarkIcon } from '@heroicons/react/24/outline'
import { DialogBody, IconButton, DialogFooter, Dialog, Typography, Avatar, Button } from '@material-tailwind/react'
import { setOpenEditProfileImage, setSrcProfileImage } from 'apps/companyProfile.slice'
import { RootState, useAppDispatch } from 'apps/store'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function EditCompanyProfilePicture() {
    const openPreviewImage = useSelector((state: RootState) => state.companyProfileSlice.openEditProfileImage)
    const srcImage = useSelector((state: RootState) => state.companyProfileSlice.srcProfileImage)
    const [errorMsg, setErrorMsg] = useState('')
    const dispatch = useAppDispatch()

    const onFileChange = (event: any) => {
        const file = event.target.files[0]
        if (file) {
            // Kiểm tra loại tệp
            const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg']
            if (!allowedFileTypes.includes(file.type)) {
                setErrorMsg('Chỉ cho phép tải lên tệp PNG hoặc JPEG/JPG.')
                // Xóa giá trị của input để ngăn chọn tệp
                event.target.value = ''
                return
            }
            const reader = new FileReader()
            setErrorMsg('')
            reader.onload = function (e: any) {
                const imageDataUrl = e.target.result

                // Sử dụng chuỗi dữ liệu (data URL) để đặt src của thẻ img
                dispatch(setSrcProfileImage(imageDataUrl as string))
            }

            // Đọc file dưới dạng Data URL
            reader.readAsDataURL(event.target.files[0])
            console.log(typeof event.target.files[0])
        }
    }

    return (
        <Dialog
            size='md'
            open={openPreviewImage}
            handler={() => dispatch(setOpenEditProfileImage(openPreviewImage))}
            className='p-0'
        >
            <DialogBody className='relative'>
                <div className='mb-1 flex flex-col gap-4 w-full'>
                    <Typography variant='h6' color='blue-gray' className='mb-4'>
                        Thay đổi ảnh đại diện
                    </Typography>
                    <div className='flex flex-row gap-x-5 w-full'>
                        {' '}
                        <div className='w-40'>
                            <Avatar src={srcImage} alt='Profile picture' variant='circular' className='h-full w-full' />
                        </div>
                        <div className='flex flex-col justify-start gap-y-5'>
                            <div className='flex flex-row gap-x-2'>
                                <label
                                    htmlFor='company-avatar'
                                    className='rounded-sm px-6 !bg-gold-900 flex items-center justify-center text-gray-100 cursor-pointer hover:'
                                >
                                    Thay đổi
                                    <input
                                        type='file'
                                        accept='.png, .jpg, .jpeg'
                                        onChange={onFileChange}
                                        id='company-avatar'
                                        className='hidden'
                                    />
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
                            <div>
                                {errorMsg !== '' ? (
                                    <Typography
                                        variant='paragraph'
                                        color='red'
                                        // className='text-gray-600'
                                        children={'*' + errorMsg}
                                    ></Typography>
                                ) : null}
                                <Typography variant='paragraph' color='blue-gray' className='text-gray-600'>
                                    Tối đa 100kb (.png, .jpg, .jpeg)
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <IconButton
                    variant='text'
                    // size='sm'
                    ripple={false}
                    className='absolute right-2 top-2 rounded-lg w-10 h-10 bg-gray-50/50 flex items-center justify-center cursor-pointer hover:scale-105 duration-200 hover:text-gray-900 z-20 hover:bg-gray-50'
                    onClick={() => {
                        dispatch(setOpenEditProfileImage(false))
                        setErrorMsg('')
                    }}
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
                    onClick={() => {
                        dispatch(setOpenEditProfileImage(false))
                        setErrorMsg('')
                    }}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default EditCompanyProfilePicture
