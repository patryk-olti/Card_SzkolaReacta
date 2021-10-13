import React from "react";

const Container = ({ children, height, width }) => {

    const styles = {
        height: `${height}px`,
        width: `${width}px`,
        border: '1px solid rgba(221, 221, 221, 0.8)',
        borderRadius: '5px',
        boxShadow: '2px 2px 2px rgba(221, 221, 221, 0.8)',
        overflow: 'hidden'
    }

    return(
        <div style={styles}>
            {children}
        </div>
    )
}

export default Container;