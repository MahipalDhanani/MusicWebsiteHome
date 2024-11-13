import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const HOC = (Component) => {
    function NewCom(props) {
        return (
            <>
                <div className="position-relative">
                    <div className="fixed top-0 w-full z-50"> {/* Full width and higher z-index */}
                        <Header />
                    </div>
                    <div className="z-0 pt-[70px]"> {/* Add padding-top to avoid overlap */}
                        <Component {...props} />
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
    return NewCom;
};
