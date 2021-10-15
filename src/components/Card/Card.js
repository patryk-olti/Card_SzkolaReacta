import React, { useState } from "react";

import Container from "./Container";
import Section from "./Section";

import LoginCircle from "./LoginCircle";
import TextSide from "./TextSide";
import Button from "./Button";

import Image from "./Image";

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Card = ({ data }) => {

    const { title, date, short, long, img} = data;

    const [ visibilityLong, setVisibilityLong ] = useState(false);

    const toggleVisibilityLong = () => setVisibilityLong( prev => !prev );

    const height = visibilityLong ? `880` : `400`;

    return(
       <Container height={height} width='320'>
           <Section padding='15' flexDirection='row' alignItems='space-between' justifyContent='space-between'>
                <LoginCircle bgColor='rgba(255, 50, 0, 0.8)' size='45' color='white' />
                <Section flexDirection='column' alignItems='center' justifyContent='space-beetwen' >
                    <TextSide text={title} size='16' padding='2' />
                    <TextSide text={date} size='14' padding='2' />
                </Section>
                <Button icon={faEllipsisV} size='45' activeBgColor='rgba(228, 228, 228, 0.4)' disActiveBgColor='transparent' color='gray' />
           </Section>

            <Section height='180' >
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
                <Button icon={faChevronDown} size='45' activeBgColor='rgba(228, 228, 228, 0.4)' disActiveBgColor='transparent' color='gray' toggleFun={toggleVisibilityLong} />
            </Section>

            <Section>
                <TextSide text={long} size='16' padding='10' />
            </Section>         
       </Container>
    );
}

export default Card;