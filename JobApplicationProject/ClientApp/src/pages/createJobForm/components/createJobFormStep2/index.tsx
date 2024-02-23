import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Card, Typography } from '@material-tailwind/react'
import { IJobDescriptionModel } from 'models'

function CreateJobFormStep2(props: { formData: IJobDescriptionModel | undefined; setFormData: any }) {
    const { formData, setFormData } = props

    return (
        <>
            <Card color='white' shadow={true} className='w-full h-fit pb-6 rounded-md'>
                <Typography variant='h5' color='blue-gray' className='px-6 py-4 border-b-2 border-b-gray-200'>
                    Miêu tả chi tiết công việc
                </Typography>
                <form className='mt-4 px-6 w-full flex flex-col gap-y-4 h-[calc(100vh-24rem)] overflow-y-scroll scrollbar'>
                    <div className='flex flex-row gap-x-6'>
                        <div className='mb-1 flex flex-col gap-4 w-full'>
                            <Typography variant='h6' color='blue-gray' className='mb-0'>
                                Mô tả công việc
                            </Typography>
                            <CKEditor
                                editor={ClassicEditor}
                                data={formData?.description}
                                onReady={(_editor: any) => {
                                    // You can store the "editor" and use when it is needed.
                                }}
                                onChange={(_event: any, editor: any) => {
                                    setFormData((prev: any) => ({ ...prev, description: editor.getData() }))
                                    // console.log(jobDesc)
                                }}
                            ></CKEditor>
                        </div>
                    </div>
                    {/* <div className='flex flex-row gap-x-6'>
                        <div className='mb-1 flex flex-col gap-4 w-full'>
                            <Typography variant='h6' color='blue-gray' className='mb-0'>
                                Preview
                            </Typography>
                            <div dangerouslySetInnerHTML={sanitizedData(jobDesc)}></div>
                        </div>
                    </div> */}
                    <div className='flex flex-row gap-x-6'>
                        <div className='mb-1 flex flex-col gap-4 w-full'>
                            <Typography variant='h6' color='blue-gray' className='-mb-1'>
                                Yêu cầu công việc
                            </Typography>
                            <CKEditor
                                editor={ClassicEditor}
                                data={formData?.jobRequired}
                                onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.
                                }}
                                onChange={(event, editor) => {
                                    setFormData((prev: any) => ({ ...prev, jobRequired: editor.getData() }))
                                }}
                            ></CKEditor>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-6'>
                        <div className='mb-1 flex flex-col gap-4 w-full'>
                            <Typography variant='h6' color='blue-gray' className='-mb-1'>
                                Tại sao bạn thích làm việc ở đây
                            </Typography>
                            <CKEditor
                                editor={ClassicEditor}
                                data={formData?.jobBenefit}
                                onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.
                                }}
                                onChange={(event, editor) => {
                                    setFormData((prev: any) => ({ ...prev, jobBenefit: editor.getData() }))
                                }}
                            ></CKEditor>
                        </div>
                    </div>
                </form>
            </Card>
        </>
    )
}

export default CreateJobFormStep2
