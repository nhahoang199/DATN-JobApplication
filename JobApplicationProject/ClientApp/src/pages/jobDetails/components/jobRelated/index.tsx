import { List, ListItem, Typography } from '@material-tailwind/react'
import { JobListItem } from 'components/common'
import { NavLink } from 'react-router-dom'

function JobRelated() {
    const data = [
        {
            title: 'Backend Developer'
        },
        {
            title: 'Backend Developer'
        },
        {
            title: 'Backend Developer'
        },
        {
            title: 'Backend Developer'
        },
        {
            title: 'Backend Developer'
        },
        {
            title: 'Backend Developer'
        }
    ]
    return (
        <div className='flex flex-col p-8 bg-white rounded-lg shadow-lg gap-y-5'>
            <Typography
                variant='h4'
                color='blue-gray'
                className='w-full !line-clamp-2 cursor-default pb-4 border-b-2 border-dashed '
            >
                <div className='b-title pl-2'>Việc làm liên quan</div>
            </Typography>

            <List className='flex flex-col gap-y-4'>
                {data.map((item, index) => (
                    <NavLink to='#zzxczxc' className='text-initial' key={index}>
                        <ListItem className='flex flex-col bg-gray-100 hover:bg-gray-200'>
                            <JobListItem item={item} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    )
}

export default JobRelated
