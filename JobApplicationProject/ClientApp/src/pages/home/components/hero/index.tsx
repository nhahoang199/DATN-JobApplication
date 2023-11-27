const HeroSection = () => {
    return (
        <section className='pl-12 bg-center bg-no-repeat bg-cover 3xl:pl-48 dark:bg-gray-800 dark:text-gray-100 bg-hero'>
            <div className='flex flex-col justify-center h-screen p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between !max-w-full'>
                <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
                    <h1 className='text-5xl font-bold text-black leadi sm:text-6xl'>
                        Tìm
                        <span className=' text-deep-purple-400'> công việc</span> mơ ước của bạn
                    </h1>
                    <p className='mt-6 mb-8 text-lg text-black sm:mb-12'>
                        Khám phá cơ hội việc làm tốt nhất cho bạn {''}
                        <br className='hidden md:inline lg:hidden' />
                        và bắt đầu sự nghiệp mới ngay hôm nay tại trang web của chúng tôi!
                    </p>
                    <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
                        <a
                            rel='noopener noreferrer'
                            href='#job-ref'
                            className='px-8 py-3 text-lg font-semibold text-gray-200 bg-gray-900 rounded hover:bg-gray-600 dark:text-gray-900'
                        >
                            Tìm công việc
                        </a>
                        <a
                            rel='noopener noreferrer'
                            href='#zxczxcz'
                            className='px-8 py-3 text-lg font-semibold text-black border rounded border-brown-900 hover:bg-gray-300'
                        >
                            Tạo hồ sơ
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
