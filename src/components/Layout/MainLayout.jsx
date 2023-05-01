import React from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer/Footer';
import Home from '../Pages/Home/Home';


const MainLayout = () => {
    return (
        <div>
            <Header />
       <Home />
            <Footer /> 
        </div>
    );
};

export default MainLayout;