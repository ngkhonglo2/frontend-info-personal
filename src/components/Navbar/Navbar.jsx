import React, { useEffect, useState } from 'react';
import {
    ContainterNavbar,
    LinkNavbar,
    LogoNavbar, 
    NavigationNavbar, 
    ButtonNavbar, 
    ButtonNavbarRight
} from './Style';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/authRequest';

const Navbar = () => {
    const [navBackground, setNavBackGround] = useState('rgba(0, 0, 0, 0.2)')
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavBackGround('#172b4d') : setNavBackGround('rgba(0, 0, 0, 0.2)')
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
          window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    useEffect(() => {
        if(!currentUser) {
          navigation('/login')
        }
      }, []);

    const {currentUser} = useSelector( state => state.auth.login);

    const accessToken = currentUser?.accessToken;
    const id = currentUser?._id
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const handleLogoutUser = () => {
        logoutUser(accessToken, id, dispatch, navigation)
    }
    return (
        <ContainterNavbar background={navBackground}>
            <LogoNavbar>
                Logo
            </LogoNavbar>
            <NavigationNavbar>
                {currentUser ? (
                    <>
                        <LinkNavbar to="/">Home</LinkNavbar>
                        <ButtonNavbar to="/logout" onClick={handleLogoutUser}>Logout</ButtonNavbar>
                    </>
                ): (
                    <>
                        <ButtonNavbarRight to="/login">Login</ButtonNavbarRight>
                        <ButtonNavbar to="/register">Register</ButtonNavbar>
                    </>
                )}
            </NavigationNavbar>
        </ContainterNavbar>
    );
};

export default Navbar;