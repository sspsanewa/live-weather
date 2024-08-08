import { Typography } from '@mui/material'
import React from 'react'
import logo from '../Assets/logo.avif'
const Header = () => {
    return (
        <div className='bg-slate-700  flex justify-between items-center  py-4 px-10' >
            <Typography variant='h5' className='text-yellow-500'>
                <b>Sky Blue</b>
            </Typography>
            <img className='rounded-lg' width={40} height={40} src={logo} alt='logo' />
        </div>
    )
}

export default Header
