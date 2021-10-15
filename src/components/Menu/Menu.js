import React, { useState } from 'react';

import MenuLink from './MenuLink';

const data = [
    {
        to: '/',
        title: 'Home'
    },
    {
        to: '/about',
        title: 'About'
    },
    {
        to: '/contact',
        title: 'Contact'
    },
    {
        to: '/posts',
        title: 'Posts'
    },
]

const styles = {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column'
}

const Menu = () => {

    const links = data.map(item => 
        <MenuLink 
            key={item.title} 
            to={item.to} 
            title={item.title} 
        />
    )

    return(
        <nav style={styles}>
            {links}
        </nav>
    )
}

export default Menu;