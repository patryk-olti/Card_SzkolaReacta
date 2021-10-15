import React from "react";

const Section = ({ children, padding, flexDirection, alignItems, justifyContent, height }) => {

    const styles = {
        display: 'flex',
        flexDirection: `${flexDirection}`,
        alignItems: `${alignItems}`,
        justifyContent: `${justifyContent}`,
        height: `${height}px`,
        width: `100%`,
        padding: `${padding}px`
    }

    return(
        <div style={styles}>
            {children}
        </div>
    )
}

export default Section;