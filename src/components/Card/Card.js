import React from "react";

import Container from "./Container";
import Section from "./Section";

import LoginCircle from "./LoginCircle";
import TextSide from "./TextSide";
import Button from "./Button";

import Shrimps from '../../img/shrimps.jpg';
import Image from "./Image";

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';



const Card = ({ data }) => {

    const { title, date, short, long} = data;

    return(
       <Container  height='400' width='320'>
           <Section padding='15' flexDirection='row' alignItems='space-between' justifyContent='space-between'>
                <LoginCircle bgColor='rgba(255, 50, 0, 0.8)' size='45' color='white' />
                <Section flexDirection='column' alignItems='center' justifyContent='space-beetwen' >
                    <TextSide text={title} size='16' padding='2' />
                    <TextSide text={date} size='14' padding='2' />
                </Section>
                <Button icon={faEllipsisV}  bgColor='transparent' size='45' color='gray' />
           </Section>

            <Section>
                <Image src={Shrimps} alt='shrimps' />
            </Section>

            <Section>
                <TextSide text={short} size='16' padding='10' />
            </Section>


       </Container>
    );
}

export default Card;