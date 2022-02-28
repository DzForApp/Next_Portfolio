import React from 'react'

export default function InputItem(props) {
    return (
        <div className=''>
            <p className='text-2xl font-serif'>{props.title}</p>
            <input className='w-full h-12' type={props.name} />
        </div>
    )
}
