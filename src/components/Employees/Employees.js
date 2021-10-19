import React from "react";

import Container from "../libraryComponents/Container";
import Section from "../libraryComponents/Section";
import Employer from "./Employer";

const data = [
    {
        id: 1,
        name: 'Patryk',
        surname: 'Oltuch',
        age: 26,
        payroll: 2000,
        profession: 'Electronic'
    },
    {
        id: 2,
        name: 'Dawid',
        surname: 'Kałużny',
        age: 25,
        payroll: 2500,
        profession: 'Programmer'
    },
    {
        id: 3,
        name: 'Anita',
        surname: 'Kozioł',
        age: 32,
        payroll: 3500,
        profession: 'Manager'
    }
]

const Employees = () => {

    const listEmployers = data.map( item => (
        <Employer 
            data={item}
            size='20'
        />))

    return(
        <Container width='600'> 
            <Section padding='0' flexDirection='row' alignItems='space-between' justifyContent='space-between'>
                <Section padding='15' flexDirection='column' alignItems='space-between' justifyContent='space-between'>
                    {listEmployers}
                </Section>
           </Section>
        </Container>
    )
}

export default Employees;