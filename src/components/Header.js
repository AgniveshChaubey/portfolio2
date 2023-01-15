import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
    <MyHeader>
        <NavLink to='/'>
            <img src="../images/code-in-veins.png" alt="logo" />
        </NavLink>
        <Navbar />
    </MyHeader>
  )
}

const MyHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({theme}) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;

`;

export default Header;