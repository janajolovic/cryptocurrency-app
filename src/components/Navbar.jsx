import { Avatar, Button, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import icon from "../images/cryptocurrency.png"

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="">Cryptocurrency app</Link>
            </Typography.Title>
        </div>
    </div>
  )
}

export default Navbar