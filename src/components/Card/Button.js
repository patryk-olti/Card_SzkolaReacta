import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ icon, size, activeBgColor, disActiveBgColor, color }) => {

    const [ mouseOn, setMouseOn ] = useState(false);

    const iconPrint = {icon} ? <FontAwesomeIcon icon={icon} /> : null;

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
        cursor: 'pointer'
    }

    return(
        <div style={styles} onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)} >
            { iconPrint }
        </div>
    )
}

export default Button;