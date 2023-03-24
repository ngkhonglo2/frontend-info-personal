import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainterNavbar = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 12px 100px;
    background: ${props => (props.background)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .5s;
    z-index: 999;
    @media (max-width: 576px) {
        padding: 12px 15px;
    }
`;

export const LogoNavbar = styled.div`
    /* width: 50px;
    height: 50px; */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #fff;
    font-weight: 700;
`

export const NavigationNavbar = styled.div`

`

export const LinkNavbar = styled(Link) `
    position: relative;
    font-size: 1.1em;
    text-decoration: none;
    font-weight: 500;
    color: #fff;
    margin-right: 40px;
    &:after {
        content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
    background: #fff;
    border-radius: 5px;
    bottom: -6px;
    transform: scaleX(0);
    transform-origin: left;
    transition: .5s;
    };
    &:hover:after {
        transform: scaleX(1);
    };
`
export const ButtonNavbar = styled(Link)`
    width: 130px;
    height: 50px;
    background: transparent;
    border: 2px solid #fff;
    outline: none;
    border-radius: 6px;
    font-size: 1.1em;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    transition: .5s;
    text-decoration: none;
    padding: 8px 24px;
    &:hover {
        background: #fff;
        color: #162938;
    }
`

export const ButtonNavbarRight = styled(ButtonNavbar) `
    margin-right: 20px;
`