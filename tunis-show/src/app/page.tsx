'use client';

import React from 'react';
import Navbar from './navbar/page'
import Homepage from './homepage/page';
import Footer from './footer/page';
import Cards from './cards/page';
import Features from './features/page';
import Questions from './questions/page';

export default function Home(){
    return (
        <>
            <Navbar />
            <Homepage />
            <Features />
            <Cards />
            <Questions />
            <Footer />
            
        </>
    );
}