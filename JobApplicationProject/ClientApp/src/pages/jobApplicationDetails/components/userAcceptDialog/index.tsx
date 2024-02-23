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

function UserAcceptJobApplicationDialog(props: IConfirmDialogProps) {
    const open = props.open
    const jobApplicationId = props.jobApplicationId
    const dispatch = useAppDispatch()
    const handleOpen = () => props.setOpen((cur: boolean) => !cur)
    const switchRef = useRef<null | any>(null)
    const [userAcceptComment, setUserAcceptComment] = useState<string>()
    const [isUserSatifiedWithResponse, setIsUserSatifiedWithResponse] = useState(false)
    const handleSwitchChange = (e: any) => {
        setIsUserSatifiedWithResponse(switchRef.current.checked)
    }
    const handleConfim = async () => {
        try {
            dispatch(showProgressLoading('Đang cập nhật...'))
            await updateJobApplicationAPI({
                id: jobApplicationId,
                status: 4,
                responseSummary: isUserSatifiedWithResponse ? userAcceptComment : null
            })
            await toastSuccess('Bạn đã đồng ý vào làm việc')
        } catch (error) {
            dispatch(hideProgressLoading())
            toastError('Có lỗi xảy ra')
            console.log(error)
        } finally {
            dispatch(hideProgressLoading())
        }
    }
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
                <DialogHeader>Đồng ý làm việc</DialogHeader>
                <DialogBody className='py-0'>
                    <div className=''>
                        <Typography variant='h6' color='blue-gray' className='mb-2 mr-4 text-base'>
                            Bạn có muốn gửi nhận xét cho nhà tuyển dụng không?
                        </Typography>
                        <div className='w-fit h-6 flex items-center' onClick={handleSwitchChange}>
                            <div className='flex gap-10 -ml-3'>
                                <Radio name='type' label='Không' defaultChecked crossOrigin={undefined} />
                                <Radio name='type' label='Có' inputRef={switchRef} crossOrigin={undefined} />
                            </div>
                        </div>
                        <div
                            className={`flex flex-col gap-2 mt-2 ${
                                isUserSatifiedWithResponse ? 'block fadeIn' : 'hidden fadeOut'
                            }`}
                        >
                            {' '}
                            <Typography variant='h6' color='blue-gray' className='text-lg'>
                                Nhận xét
                            </Typography>
                            <Textarea
                                size='lg'
                                variant='outlined'
                                label='Viết nhận xét của bạn'
                                className='border-solid !border-gray-900 scrollbar'
                                onChange={(e) => setUserAcceptComment(e.target.value)}
                            />
                        </div>
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

export default UserAcceptJobApplicationDialog
