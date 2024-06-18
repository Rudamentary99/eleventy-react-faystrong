import React from 'react';
import styled from 'styled-components';


export default function Hero({ data, children }) {
    const { title, slogan, background } = data;
    const StyledHero = styled.section`
        background: url(${background}) no-repeat center center;
        box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
        background-size: cover;

        color: white;

        padding: calc(${(props) => props.theme.spaceUnit} * 4) 0;
        margin:  calc(${(props) => props.theme.spaceUnit} * -2);
        // margin-bottom: calc(${(props) => props.theme.spaceUnit} * 4);
    `;
    const Wrapper = styled.div`
        margin: 0 auto;
        max-width: 800px;
        text-align: Left;
        border-left: 1px solid ${(props) => props.theme.colors.primary};
        padding-left: calc(${(props) => props.theme.spaceUnit} * 2);
    `;
    const Heading = styled.h1`
        font-size: 3rem;
        margin-bottom: 1rem;
    `;


    return (
        <StyledHero>
            <Wrapper>
                <Heading>{title}</Heading>
                <p>{slogan}</p>
                {children}
            </Wrapper>
        </StyledHero>
    );
} 