import React from 'react'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react'

interface IConfirmDialogProps {
    open: boolean
    message: string
    setOpen: any
    handleConfim: () => void
}

export function ConfirmDialog(props: IConfirmDialogProps) {
    // const [open, setOpen] = React.useState(props.open)
    const open = props.open
    const message = props.message
    const handleConfim = props.handleConfim
    const handleOpen = () => props.setOpen((cur: boolean) => !cur)

    return (
        <>
            <Dialog
                open={open}
                handler={handleOpen}
                size='xs'
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 }
                }}
            >
                <DialogHeader>Xác nhận</DialogHeader>
                <DialogBody>{message}</DialogBody>
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
