import React from 'react'
import './Menu.css';
import Logo from '../../Assets/logo.png';
import Button from '../Button';

function Menu () {
    return (
        <nav className="Menu">
            <a href='/'>
                <img className="Logo" src={Logo} alt="logo" />
            </a>

            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}


export default Menu;

