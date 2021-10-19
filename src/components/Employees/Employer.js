import React, { useState } from "react";

import Name from "./Name";
import About from "./About";

const Employer = ({ data, size }) => {
    
    const { id, name, surname, age, payroll, profession } = data;

    const [ aboutVisible, setAboutVisible ] = useState(false);

    const handleClick = () => setAboutVisible(prev => !prev);

    const styles = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '5px',
        fontSize: `${size}px`,
    }

    const divEmpleyer = aboutVisible ?
    (
        <div id={id} style={styles} > 
            <Name name={name} surname={surname} handleClick={handleClick} /> 
            <About age={age} payroll={payroll} profession={profession} />    
        </div>
    )
        :
    (
        <div id={id} style={styles} > 
            <Name name={name} surname={surname} handleClick={handleClick} />    
        </div>
    )


    return <> {divEmpleyer} </>
}

export default Employer;