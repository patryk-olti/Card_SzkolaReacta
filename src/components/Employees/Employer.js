import React from "react";

import Name from "./Name";
import About from "./About";

const Employer = ({ data, size }) => {
    
    const { id, name, surname, age, payroll, profession } = data;

    const styles = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '5px',
        fontSize: `${size}px`,
    }

    return(
        <div id={id} style={styles} > 
            <Name name={name} surname={surname} /> 
            <About age={age} payroll={payroll} profession={profession} />    
        </div>
    )
}

export default Employer;