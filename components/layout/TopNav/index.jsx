import React from 'react';
import styled, { css } from 'styled-components';
import Nav from '../../primitives/Nav';
import Ul from '../../primitives/Ul';
import Li from '../../primitives/Li';
import A from '../../primitives/A';
import Icon from '../../ui/Icon';
import HomeIcon from '../../../src/icons/home.svg';

const MainNav = styled.nav`
    display: flex;  
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    color: ${(props) => props.theme.colors.text_light};
    font-weight: bold;
    font-size: 1.2rem;
    // background-color: ${(props) => props.theme.colors.primary};
    width: 100%;
    position: relative;
    z-index: 100;
    border-bottom: 1px solid ${(props) => props.theme.colors.text_light};
    `;

const LogoSection = styled.section`
    display: flex;
    align-items: center;
    margin-right: auto;
    font-family: ${(props) => props.theme.type.heading};
`;
const StyledA = styled(A)`
    text-decoration: none;
    font-family: ${(props) => props.theme.type.subheading};
    font-weight: 100;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.text_light};
    ${(props) =>
        props.active &&
        css`
            border-bottom: 2px solid ${props.theme.colors.text_light};
            padding-bottom: 0.25rem;
        `}
     
	transition: 170ms ease-in-out, background-color 170ms ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`;

const sections = [
    {
        title: 'A test page',
        text: 'about',
        url: '/info/',
    },
    {
        title: 'The blog',
        text: 'Blog',
        url: '/blog/',
    },
    {
        title: 'The users list',
        text: 'Users',
        url: '/users/',
    },
    {
        title: 'Storybook stories',
        text: 'Storybook',
        url: '/storybook',
    },
];

export default function TopNav({ active }) {
    return (
        <MainNav>
            <LogoSection>Fayetteville Strong</LogoSection>
            <Ul inline reset>
                {sections.map((section, i) => (
                    <Li key={i}>
                        <StyledA
                            title={section.title}
                            href={section.url}
                            active={active === section.url}
                        >
                            <Icon icon={section.icon} />
                            {!section.noText && section.text}
                        </StyledA>
                    </Li>
                ))}
            </Ul>
        </MainNav>
    );
}
