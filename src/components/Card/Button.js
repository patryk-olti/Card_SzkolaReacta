import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ icon, size, activeBgColor, disActiveBgColor, color, toggleFun }) => {

    const [ mouseOn, setMouseOn ] = useState(false);
    const [ clicked, setClicked ] = useState(false);

    const iconPrint = {icon} ? <FontAwesomeIcon icon={icon} /> : null;

    const rotate = clicked ? `rotate(180deg)` : `rotate(360deg)`;
    const toggleClick = () => setClicked( prev => !prev );

    const clickable = toggleFun ? true : false;

    const styles = {
        width: `${size}px`,
        height: `${size}px`,
        lineHeight: `${size}px`,
        fontSize: `${size-25}px`,
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: mouseOn ? `${activeBgColor}` : `${disActiveBgColor}`,
        color: `${color}`,
        fontFamily: 'Roboto',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        transform: rotate
    }

    return(
        <div
            style={styles} 
            onMouseEnter={() => setMouseOn(true)} 
            onMouseLeave={() => setMouseOn(false)}
            onClick={
                clickable ? 
                () => {
                    toggleFun();
                    toggleClick();
                } : null
            }
        >
            { iconPrint }
        </div>
    )
}

export default Button;