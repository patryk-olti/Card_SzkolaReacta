import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ icon, size, bgColor, color }) => {

    const iconPrint = {icon} ? <FontAwesomeIcon icon={icon} /> : null;

    const styles = {
        width: `${size}px`,
        height: `${size}px`,
        lineHeight: `${size}px`,
        fontSize: `${size-25}px`,
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        fontFamily: 'Roboto'
    }

    return(
        <div style={styles}>
            { iconPrint }
        </div>
    )
}

export default Button;