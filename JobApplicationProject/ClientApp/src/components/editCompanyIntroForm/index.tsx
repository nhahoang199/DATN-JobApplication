import { LightBulbIcon } from '@heroicons/react/24/outline'
import { Drawer, Typography, Button, IconButton } from '@material-tailwind/react'
import { setOpenEditCompanyIntro } from 'apps/companyProfile.slice'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useAppDispatch, RootState } from 'apps/store'
import React from 'react'
import { useSelector } from 'react-redux'

function EditCompanyIntroDrawerForm() {
    const dispatch = useAppDispatch()
    const openEditCompanyIntro = useSelector((state: RootState) => state.companyProfileSlice.openEditCompanyIntro)
    return (
        <Drawer
            open={openEditCompanyIntro}
            className='p-4 '
            onClose={() => dispatch(setOpenEditCompanyIntro(false))}
            placement='right'
            size={800}
            // overlayProps={<div className='fixed top-0 right-0 left-0 bottom-0 bg-black-50/50'></div>}
        >
            <div className='mt-12'>
                <div className='mb-6 flex items-center justify-between'>
                    <Typography variant='h5' color='blue-gray'>
                        Chỉnh sửa giới thiệu về công ty
                    </Typography>
                    <IconButton
                        variant='text'
                        color='blue-gray'
                        onClick={() => dispatch(setOpenEditCompanyIntro(false))}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='h-5 w-5'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </IconButton>
                </div>
                <form className='mt-4 w-full flex flex-col gap-y-2'>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2 flex flex-row gap-x-2 font-medium'>
                            <span className='flex flex-row gap-x-2 text-amber-700 font-semibold'>
                                <LightBulbIcon className='w-5 h-5' />
                                Tip:
                            </span>
                            Giới thiệu chung về công ty
                        </Typography>
                        <CKEditor
                            editor={ClassicEditor}
                            // onInit={(editor: any) => {
                            //     // You can store the "editor" and use when it is needed.
                            //     // console.log("Editor is ready to use!", editor);
                            //     editor.editing.view.change((writer: any) => {
                            //         writer.setStyle('height', '200px', editor.editing.view.document.getRoot())
                            //     })
                            // }}
                            // data={companyIntro}
                            onReady={(editor: any) => {
                                // You can store the "editor" and use when it is needed.
                                editor.editing.view.change((writer: any) => {
                                    writer.setStyle('min-height', '200px', editor.editing.view.document.getRoot())
                                    writer.setStyle('max-height', '600px', editor.editing.view.document.getRoot())
                                })
                            }}
                            // onChange={(_event: any, editor: any) => {
                            //     setCompanyIntro(editor.getData())
                            //     // console.log(jobDesc)
                            // }}
                        ></CKEditor>
                    </div>
                </form>
            </div>
            <div className='flex gap-2 fixed bottom-6'>
                <Button size='sm' className='rounded-sm px-6'>
                    Lưu
                </Button>
                <Button
                    size='sm'
                    variant='outlined'
                    onClick={() => dispatch(setOpenEditCompanyIntro(false))}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </div>
        </Drawer>
    )
}

export default EditCompanyIntroDrawerForm
