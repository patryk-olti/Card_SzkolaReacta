import React from "react";

import Container from "./Container";
import Section from "./Section";

import LoginCircle from "./LoginCircle";
import TextSide from "./TextSide";
import Button from "./Button";

import Image from "./Image";

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


const Card = ({ data }) => {

    const { title, date, short, long, img} = data;

    return(
       <Container  height='400' width='320'>
           <Section padding='15' flexDirection='row' alignItems='space-between' justifyContent='space-between'>
                <LoginCircle bgColor='rgba(255, 50, 0, 0.8)' size='45' color='white' />
                <Section flexDirection='column' alignItems='center' justifyContent='space-beetwen' >
                    <TextSide text={title} size='16' padding='2' />
                    <TextSide text={date} size='14' padding='2' />
                </Section>
                <Button icon={faEllipsisV} size='45' activeBgColor='rgba(228, 228, 228, 0.4)' disActiveBgColor='transparent' color='gray' />
           </Section>

            <Section>
                <Image src={img} alt='shrimps' />
            </Section>

            <Section>
                <TextSide text={short} size='16' padding='10' />
            </Section>

            <Section padding='5' flexDirection='row' alignItems='center' justifyContent='space-between'>
                <Section padding='0' flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <Button icon={faHeart}  size='45' activeBgColor='rgba(228, 228, 228, 0.4)' disActiveBgColor='transparent' color='gray' />
                    <Button icon={faLink}  size='45' activeBgColor='rgba(228, 228, 228, 0.4)' disActiveBgColor='transparent' color='gray' />
                </Section>
                <Button icon={faChevronUp} size='45' activeBgColor='rgba(228, 228, 228, 0.4)' disActiveBgColor='transparent' color='gray' />
            </Section>
            
       </Container>
    );
}

export default Card;