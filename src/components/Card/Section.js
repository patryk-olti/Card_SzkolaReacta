import React from "react";

const Section = ({ children, padding, flexDirection, alignItems, justifyContent }) => {

    const styles = {
        display: 'flex',
        flexDirection: `${flexDirection}`,
        alignItems: `${alignItems}`,
        justifyContent: `${justifyContent}`,
        padding: `${padding}px`,
    }

    return(
        <div style={styles}>
            {children}
        </div>
    )
}

export default Section;