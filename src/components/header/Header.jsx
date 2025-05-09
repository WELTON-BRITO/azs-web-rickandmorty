import React from 'react';

import styled from 'styled-components';
import './header.css';
import logo from '../../assets/logo.png';

const Title = styled.header`
    width: 100%;
    background-color:rgb(3, 3, 3);
    text-align: center;
    font-size: 1.7em;    
`

function Header() {

    return (
        <Title>
            <header>
                <img src={logo} alt="Rick and Morty Logo" style={{ maxWidth: '200px', height: 'auto' }} />
            </header>
        </Title>
    );
}

export default Header;