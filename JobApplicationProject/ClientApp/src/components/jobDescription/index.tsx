import React from 'react'

function JobDescription() {
    const data = [
        {
            title: 'Mô tả công việc',
            items: ['aaa', 'vvvv', 'cccc']
        },
        {
            title: 'Yêu cầu ứng viên',
            items: ['aaa', 'vvvv', 'cccc']
        },
        {
            title: 'Quyền lợi',
            items: ['aaa', 'vvvv', 'cccc']
        },
        {
            title: 'Địa điểm làm việc',
            items: 'Hà Nhội: 3 Lê Trọng tấn'
        }
    ]
    return (
        <div className='flex flex-col p-8 bg-white rounded-lg shadow-lg gap-y-5'>
            <h2 className='pl-2 text-lg font-bold border-left' style={{ borderLeft: '6px solid #000' }}>
                Chi tiết tin tuyển dụng
            </h2>
            <div className='flex flex-col gap-y-4'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col gap-y-2'>
                        <h3 className='text-base font-bold'>{item.title}</h3>
                        {Array.isArray(item.items) ? (
                            <ul className='pl-5 text-sm list-disc list-inside'>
                                {item.items.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem}</li>
                                ))}
                            </ul>
                        ) : (
                            <div className='text-sm'>- {item.items}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobDescription
