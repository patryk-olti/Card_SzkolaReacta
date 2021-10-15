import React from 'react';

const styles = {
    textDecoration: 'none',
    color: 'black',
    margin: '10px',
    fontSize: '20px'
}

const MenuLink = ({ to, title }) => <a href={to} style={styles} > {title} </a>

export default MenuLink;