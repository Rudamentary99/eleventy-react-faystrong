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
    padding: 1rem 0;
    margin: 0 auto;
    max-width: 960px;
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
    font-size: 1.2rem;
`;

const LogoSection = styled.section`
    display: flex;
    align-items: center;
    margin-right: auto;
`;
const StyledA = styled(A)`
    text-decoration: none;
    ${(props) =>
        props.active &&
        css`
            border-bottom: 2px solid ${props.theme.colors.primary};
            padding-bottom: 0.25rem;
        `}
`;

const sections = [
    {
        title: 'Back to the homepage',
        text: 'Home',
        url: '/',
        icon: HomeIcon,
        noText: true,
    },
    {
        title: 'A test page',
        text: 'Info',
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
