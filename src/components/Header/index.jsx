import React, { useState } from 'react'
import { ReactComponent as Logo } from '../../images/logo.svg'
import { ReactComponent as IconMenu } from '../../images/icon-menu.svg'
import { ReactComponent as CloseMenu } from '../../images/icon-close-menu.svg'
import NavItem from '../Nav-Item'
import NavMenu from '../Nav-Menu/idex'
import { Features, Company } from './constans'
import Button from '../Buttom'
import MobileMenu from '../Mobile-menu'


export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen]=useState(false);
    return (
        <header className='flex items-center'>
            <Logo />
            <nav className='hidden xl:flex space-x-6 ml-8 items-center'>
                <NavItem text='Feature'> <NavMenu items={Features} /> </NavItem>
                <NavItem text='Company' > <NavMenu items={Company} /></NavItem>
                <NavItem text='Careers' />
                <NavItem text='About' />
            </nav>
            <div className='hidden ml-auto xl:flex space-x-5'>
                <Button >Loggin</Button>
                <Button hasBorder={true}>Register</Button>
            </div>
            <div 
            className='flex xl:hidden ml-auto cursor-pointer z-30'
            onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}>
               {isMobileMenuOpen?  <CloseMenu/>:<IconMenu/>}
            </div>
            <MobileMenu isOpen={isMobileMenuOpen}/>
        </header>
    )
}
