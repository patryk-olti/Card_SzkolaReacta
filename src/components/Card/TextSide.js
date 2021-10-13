import React from "react";

const TextSide = ({ text, size }) => {

    const styles = {
        width: '100%',
        padding: '2px',
        fontSize: `${size}px`,
        textAligh: 'left'
    }

    return(
        <span style={styles}>
            {text}
        </span>
    )
}

export default TextSide;