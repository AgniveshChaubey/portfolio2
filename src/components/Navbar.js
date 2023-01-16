import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    const MyNav = styled.nav`
        .list{
            display: flex;
            gap: 4rem;
        li{
            .navbarlink{
            list-style: none;
                &:hover,
                &:active {
                    color: ${({theme}) => theme.colors.helper};
                }
            }
        }
        }

    `;

    return (
        <MyNav>
            <div className='icon'>
                <ul className='list'>
                    <li>
                        <NavLink className='navbarlink' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='navbarlink' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='navbarlink' to='/services'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink className='navbarlink' to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </MyNav>
    );
}



export default Navbar;