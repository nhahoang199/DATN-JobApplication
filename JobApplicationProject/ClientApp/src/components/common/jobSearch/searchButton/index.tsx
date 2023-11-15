function SearchButton() {
    const handleSearch = (e: any) => {
        e.preventDefault()
    }

    return (
        <div className='items-center w-2/12 space-x-4 rounded-lg '>
            <button
                style={{ height: '46px' }}
                onClick={handleSearch}
                className='flex w-full gap-3 py-3 font-semibold text-white duration-200 border border-gray-600 rounded-lg cursor-pointer bg-gradient-to-r from-gray-800 to-black px-7 hover:scale-105 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 '
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                    />
                </svg>
                Tìm kiếm
            </button>
        </div>
    )
}

export default SearchButton
