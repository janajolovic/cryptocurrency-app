import { Avatar, Typography } from 'antd'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="logo-container">
            <Avatar />
            <Typography.Title level={3} className="logo">
                
            </Typography.Title>
        </div>
    </div>
  )
}

export default Navbar