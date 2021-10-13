import React from "react";

import Container from "./Container";
import Section from "./Section";

import LoginCircle from "./LoginCircle";
import TextSide from "./TextSide";
import Button from "./Button";

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Card = () => {

    return(
       <Container  height='400' width='320'>
           <Section padding='15' flexDirection='row' alignItems='space-between' justifyContent='space-between'>
                <LoginCircle bgColor='rgba(255, 50, 0, 0.8)' size='45' color='white' />
                <Section flexDirection='column' alignItems='center' justifyContent='space-beetwen' >
                    <TextSide text="Shrimp and Chorizo Paella" size='16' />
                    <TextSide text="September 14, 2016" size='14' />
                </Section>
                <Button icon={faEllipsisV}  bgColor='transparent' size='45' color='gray' />
           </Section>
       </Container>
    );
}

export default Card;