import {
    DialogHeader,
    DialogBody,
    DialogFooter,
    Dialog,
    Button,
    Typography,
    Radio,
    Textarea
} from '@material-tailwind/react'
import React, { useRef, useState } from 'react'

interface IConfirmDialogProps {
    open: boolean
    setOpen: any
    handleConfim: () => void
}

function UserRejectDialog(props: IConfirmDialogProps) {
    const open = props.open
    const handleConfim = props.handleConfim
    const handleOpen = () => props.setOpen((cur: boolean) => !cur)
    return (
        <>
            <Dialog
                open={open}
                handler={handleOpen}
                className='rounded-sm'
                size='xs'
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 }
                }}
            >
                <DialogHeader className='pb-2'>Từ chối làm việc</DialogHeader>
                <DialogBody className='py-0'>
                    <div className={`flex flex-col gap-y-2 mt-0 ${''}`}>
                        <Typography variant='h6' color='blue-gray' className='text-lg'>
                            <span className='text-red-500 mr-1'>*</span>
                            Lý do từ chối
                        </Typography>
                        <Textarea
                            size='lg'
                            variant='outlined'
                            label='Viết lý do từ chối của bạn'
                            className='border-solid !border-gray-900 scrollbar'
                        />
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        onClick={() => {
                            handleConfim()
                            handleOpen()
                        }}
                        className='ml-2 rounded-sm !bg-gold-900'
                    >
                        <span>Xác nhận</span>
                    </Button>
                    <Button variant='outlined' color='gray' onClick={handleOpen} className='ml-2 rounded-sm'>
                        <span>Hủy</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default UserRejectDialog
