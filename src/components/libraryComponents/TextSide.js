import React from "react";

const TextSide = ({ text, size, padding }) => {

    const styles = {
        width: '100%',
        padding: `${padding}px`,
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