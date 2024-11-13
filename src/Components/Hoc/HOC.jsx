import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const HOC = (Component) => {
    function NewCom(props) {
        return (
            <>
                <div className='position-relative'>
                    <Header />
                    <Component {...props} />
                    <Footer />
                </div>
            </>
        );
    }
    return NewCom;
};
