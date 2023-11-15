import { CareerItem } from './careerItem'
function CareerSection() {
    const data = [
        {
            name: 'aaaaaa'
        },
        {
            name: 'aaaaaa'
        },
        {
            name: 'aaaaaa'
        },
        {
            name: 'aaaaaa'
        },
        {
            name: 'aaaaaa'
        },
        {
            name: 'aaaaaa'
        },
        {
            name: 'aaaaaa'
        },
        {
            name: 'aaaaaa'
        }
    ]
    return (
        <section className='py-6 overflow-auto bg-gray-100 dark:bg-gray-800 dark:text-gray-100'>
            <div className='flex flex-col items-center justify-center !w-full 3xl:p-4 mx-auto sm:p-10'>
                {/* <p className='p-2 text-sm font-medium text-center uppercase tracki'>Trusted partner</p> */}
                <h1 className='mb-10 text-4xl font-bold text-center leadi sm:text-5xl'>Top ngành nghề nổi bật</h1>
                <div className='grid items-center w-full grid-cols-2 px-20 mt-8 gap-y-8 justify-items-center xl:grid-cols-4 3xl:grid-cols-4 3xl:gap-4 3xl:w-3/4 justify-normal'>
                    {data.map((item, index) => (
                        <CareerItem />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CareerSection
