import { CareerItem } from './careerItem'
function CareerSection() {
    const data = [
        {
            name: 'Kinh doanh/ Bán hàng',
            src: 'https://www.topcv.vn/v4/image/welcome/top-categories/kinh-doanh-ban-hang.png?v=2',
            count: 323
        },
        {
            name: 'IT phần mềm',
            src: 'https://www.topcv.vn/v4/image/welcome/top-categories/it-phan-mem.png?v=2',
            count: 482
        },
        {
            name: 'Hành chính / Văn phòng',
            src: 'https://www.topcv.vn/v4/image/welcome/top-categories/hanh-chinh-van-phong.png?v=2',
            count: 392
        },
        {
            name: 'Giáo dục/ Đào tạo',
            src: 'https://www.topcv.vn/v4/image/welcome/top-categories/giao-duc-dao-tao.png?v=2',
            count: 128
        },
        {
            name: 'Tư vấn',
            src: 'https://www.topcv.vn/v4/image/welcome/top-categories/tu-van.png?v=2',
            count: 21
        },
        {
            name: 'Marketing / Truyền thông',
            src: 'https://www.topcv.vn/v4/image/welcome/top-categories/marketing-truyen-thong-quang-cao.png?v=2',
            count: 327
        },
        {
            name: 'Vận tải/ Kho vận',
            src: 'https://www.topcv.vn/v4/image/welcome/top-categories/van-tai-kho-van.png?v=2',
            count: 43
        },
        {
            name: 'Kế toán/ Kiểm toán',
            src: 'https://www.topcv.vn/v4/image/welcome/top-categories/ke-toan-kiem-toan.png?v=2',
            count: 16
        }
    ]
    return (
        <section className='py-6 overflow-auto bg-gray-100 dark:bg-gray-800 dark:text-gray-100'>
            <div className='flex flex-col items-center justify-center !w-full 3xl:p-4 mx-auto sm:p-10'>
                {/* <p className='p-2 text-sm font-medium text-center uppercase tracki'>Trusted partner</p> */}
                <h1 className='mb-10 text-4xl font-bold text-center leadi sm:text-5xl'>Top ngành nghề nổi bật</h1>
                <div className='grid items-center w-full grid-cols-2 px-32 mt-8 3xl:px-52 gap-y-8 justify-items-center xl:grid-cols-4 3xl:grid-cols-4 3xl:gap-4 3xl:w-3/4 justify-normal'>
                    {data.map((item, index) => (
                        <CareerItem item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CareerSection
