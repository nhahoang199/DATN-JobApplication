import { Typography } from '@material-tailwind/react'
import React from 'react'

function CompanyDescription() {
    const data = [
        {
            title: 'Giới thiệu chung',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Consectetur lorem
                    donec massa sapien faucibus et molestie. Elementum nisi quis eleifend quam adipiscing vitae proin
                    sagittis nisl. Lectus proin nibh nisl condimentum id venenatis a. Integer malesuada nunc vel risus
                    commodo viverra maecenas accumsan. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
                    pellentesque. Netus et malesuada fames ac turpis egestas maecenas. Odio ut sem nulla pharetra diam.
                    Ridiculus mus mauris vitae ultricies leo integer malesuada. Risus pretium quam vulputate dignissim
                    suspendisse in est. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Elementum nisi
                    quis eleifend quam adipiscing vitae proin. Consequat nisl vel pretium lectus quam id. Condimentum id
                    venenatis a condimentum vitae. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.`
        },
        {
            title: 'Chuyên môn của chúng tôi',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Consectetur lorem
                    donec massa sapien faucibus et molestie. Elementum nisi quis eleifend quam adipiscing vitae proin
                    sagittis nisl. Lectus proin nibh nisl condimentum id venenatis a. Integer malesuada nunc vel risus
                    commodo viverra maecenas accumsan. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
                    pellentesque. Netus et malesuada fames ac turpis egestas maecenas. Odio ut sem nulla pharetra diam.
                    Ridiculus mus mauris vitae ultricies leo integer malesuada. Risus pretium quam vulputate dignissim
                    suspendisse in est. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Elementum nisi
                    quis eleifend quam adipiscing vitae proin. Consequat nisl vel pretium lectus quam id. Condimentum id
                    venenatis a condimentum vitae. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.`
        },
        {
            title: 'Tại sao bạn sẽ thích làm việc ở đây?',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Consectetur lorem
                    donec massa sapien faucibus et molestie. Elementum nisi quis eleifend quam adipiscing vitae proin
                    sagittis nisl. Lectus proin nibh nisl condimentum id venenatis a. Integer malesuada nunc vel risus
                    commodo viverra maecenas accumsan. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
                    pellentesque. Netus et malesuada fames ac turpis egestas maecenas. Odio ut sem nulla pharetra diam.
                    Ridiculus mus mauris vitae ultricies leo integer malesuada. Risus pretium quam vulputate dignissim
                    suspendisse in est. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Elementum nisi
                    quis eleifend quam adipiscing vitae proin. Consequat nisl vel pretium lectus quam id. Condimentum id
                    venenatis a condimentum vitae. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.`
        }
    ]
    return (
        <div className='flex flex-col gap-y-10'>
            {data.map((item: any, index: number) => {
                return (
                    <div className='flex flex-col w-full min-w-0 break-words rounded-xl bg-white shadow-lg '>
                        <div className='w-full px-8 pt-8'>
                            <Typography
                                variant='h4'
                                color='blue-gray'
                                className='w-full !line-clamp-2 cursor-default pb-4 border-b-2 border-dashed'
                            >
                                <div className='b-title pl-2'>{item.title}</div>
                            </Typography>
                        </div>
                        <div className='w-full px-8 pb-8 pt-4'>
                            <Typography
                                variant='paragraph'
                                color='blue-gray'
                                className='w-full text-sm leading-relaxed'
                            >
                                {item.desc}
                            </Typography>
                        </div>
                    </div>
                )
            })}
        </div>
        // <div className='container mx-auto'>

        // </div>
    )
}

export default CompanyDescription
