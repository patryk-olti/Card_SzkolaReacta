import React from "react";

const Image = ({ src, alt }) => {

    const styles= {
        img: {
            width: '100%'
        }
    }

    return(
        <img src={src} alt={alt} style={styles.img}/>
    )
}

export default Image;