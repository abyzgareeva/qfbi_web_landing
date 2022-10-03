
import React from 'react';
import './header.css';



const Header = () =>{
    return (
        <div className = 'header'>
            <div className ='header__logo'>QFBI</div>
            <div className = 'header__wrapper'>
                <div className = 'wrapper__item'>
                    <span class="material-icons">list</span>
                </div>
                <div className = 'wrapper__item'>
                    <span class="material-icons">send</span>
                </div>
                <div className = 'wrapper__item'>
                    <span class="material-icons">favorite_border</span>
                </div>
                <div className = 'wrapper__item'>
                    <span class="material-icons">login</span>
                </div>
            </div>
        </div>
    )


}

export default Header
