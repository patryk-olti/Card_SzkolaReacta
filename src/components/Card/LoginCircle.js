import React from "react";

const LoginCircle = ({ bgColor, size, color }) => {

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
            R
        </div>
    )
}

export default LoginCircle;