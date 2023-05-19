import Link from 'next/link'
import React from 'react'

export default function Products({ title, href, image }) {
    return (
        <div>
            <Link href={href}>
                <div className='bg-white w-full h-48 shadow-lg rounded-sm outline-1 outline-gray-100'>
                    <img src={image} className='w-full h-1/2' />
                    <div className='p-2'>
                        <p>{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
