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
import { updateJobApplicationAPI } from 'apis/jobApplicationAPI'
import { showProgressLoading, hideProgressLoading } from 'apps/loading.slice'
import { useAppDispatch } from 'apps/store'
import React, { useRef, useState } from 'react'
import { toastSuccess, toastError } from 'utils/function'

interface IConfirmDialogProps {
    open: boolean
    setOpen: any
    jobApplicationId: string
}

function UserRejectDialog(props: IConfirmDialogProps) {
    const [rejectReason, setRejectReason] = useState<string>()
    const dispatch = useAppDispatch()
    const open = props.open
    const jobApplicationId = props.jobApplicationId
    const handleConfim = async () => {
        try {
            dispatch(showProgressLoading('Đang cập nhật...'))
            await updateJobApplicationAPI({
                id: jobApplicationId,
                status: 6,
                hrRejectReason: rejectReason
            })
            await toastSuccess('Bạn đã từ chối vào làm việc')
        } catch (error) {
            dispatch(hideProgressLoading())
            toastError('Có lỗi xảy ra')
            console.log(error)
        } finally {
            dispatch(hideProgressLoading())
        }
    }
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
                            onChange={(e) => setRejectReason(e.target.value)}
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
