import React from 'react';
import Footer from '../../Layouts/Footer/Footer';
import Nav2 from '../../Layouts/Navbar/Nav2';
import InfoPage from './InfoPage'


const Sellyourart = () => {
    let isDesigner = localStorage.getItem('isDesigner')?localStorage.getItem('isDesigner'):'false';
    return (
        <>
            <Nav2 />
            {isDesigner === "false" ? (
                <InfoPage/>
            ):(
                <h1>Here is your form</h1>
            )}
            <Footer bgcol="white" textcol="black" />
        </>
    );
};

export default Sellyourart;
