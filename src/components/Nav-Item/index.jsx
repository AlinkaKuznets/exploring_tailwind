import React, { useState } from 'react'
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

export default function NavItem({ text = '', children }) {

    const [selected, setSelected] = useState('');

    return (
        <div className='relative'>
            <div className='flex space-x-2 cursor-pointer'>
                <span
                    className='text-medium-gray hover:text-almost-black'
                    onClick={() => children && setSelected(text !== selected ? text : '')}
                >{text}
                </span>
                {children && selected !== text && <GoChevronDown />}
                {children && selected === text && <GoChevronUp />}
            </div>
            {selected && children}
        </div>
    )
}
