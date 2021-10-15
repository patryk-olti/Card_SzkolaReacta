import React from 'react';

const MenuLink = ({ to, title, isActive, handleClick }) => {

    const styles = {
        textDecoration: 'none',
        color: isActive == title ? 'red' : 'black',
        margin: '10px',
        paddingRight: '10px',
        fontSize: '20px',
        fontFamily: 'roboto',
        borderRight: `5px solid ${isActive==title ? 'red' : 'black'}`
    }   

    return(
        <a href={to} style={styles} onClick={handleClick} name={title} > {title} </a>
    )
}

export default MenuLink;