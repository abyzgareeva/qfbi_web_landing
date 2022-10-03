import React from 'react';
import SearchField from '../../components/search_field/search_field';
import Header from '../../components/header/header.js';
import RecomentationPost from '../../components/card/card.js';
import './main.css';
//import Box from '@mui/material/Box';

const MainPage = () => {
    return(
        <div>
            <div className = 'firstscreen_container'>
                <Header />
                <div className = 'search_container'>
                    <SearchField />
                </div>
            </div>
                <div className='card_container'>
                    <RecomentationPost />
                </div>
        </div>

    )
}

export default MainPage;