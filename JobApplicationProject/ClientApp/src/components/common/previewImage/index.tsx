import { XMarkIcon } from '@heroicons/react/24/solid'
import { DialogBody, IconButton, Dialog } from '@material-tailwind/react'
import { setOpenPreviewImage } from 'apps/dialog.slice'
import { RootState, useAppDispatch } from 'apps/store'
import React from 'react'
import { useSelector } from 'react-redux'

function PreviewImage() {
    const openPreviewImage = useSelector((state: RootState) => state.dialogSlice.openPreviewImage)
    const srcImage = useSelector((state: RootState) => state.dialogSlice.srcImage)
    const dispatch = useAppDispatch()
    return (
        <Dialog
            size='md'
            open={openPreviewImage}
            handler={() => dispatch(setOpenPreviewImage(openPreviewImage))}
            className='p-0'
        >
            <DialogBody className='relative'>
                <img
                    alt='nature'
                    className='max-h-[48rem] w-full rounded-lg object-cover object-center'
                    src={srcImage}
                />
                <IconButton
                    variant='text'
                    // size='sm'
                    ripple={false}
                    className='absolute right-6 top-6 rounded-lg w-10 h-10 bg-gray-50/50 flex items-center justify-center cursor-pointer hover:scale-105 duration-200 hover:text-gray-900 z-20 hover:bg-gray-50'
                    onClick={() => dispatch(setOpenPreviewImage(false))}
                >
                    <XMarkIcon className='w-6 h-6 text-blue-gray-800' />
                </IconButton>
            </DialogBody>
        </Dialog>
    )
}

export default PreviewImage
