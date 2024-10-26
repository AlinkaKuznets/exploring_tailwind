import React from 'react'
import NavItem from '../Nav-Item'
import { Company, Features } from '../Header/constans'
import MenuItem from '../Menu-Item'
import Button from '../Buttom'

export default function MobileMenu({ isOpen = false }) {
    return (
        <React.Fragment>
            <div className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`} />
            <div className={`absolute top-0 right-0 w-1/2 bg-white justify-center z-20 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}>
                <nav className='my-20 mx-5 space-y-5 text-lg w-full'>
                    <NavItem text='Features'>
                        <div className='flex flex-col space-y-5 p-2'>
                            {Features.map(({ text, icon }) => <MenuItem key={text} text={text} icon={icon} />)}
                        </div>
                    </NavItem>
                    <NavItem text='Company' >
                        <div className='flex flex-col space-y-5 p-2'>
                            {Company.map(({ text, icon }) => <MenuItem key={text} text={text} />)}
                        </div>
                    </NavItem>
                    <NavItem text='Careers' />
                    <NavItem text='About' />
                    <div className='flex flex-col space-y-5'>
                        <Button>Loggin</Button>
                        <Button hasBorder={true}>Register</Button>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}
