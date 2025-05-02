import React from 'react';
import Banner from '../Components/HomePage/Banner';
import Features from '../Components/HomePage/Features';
import Services from '../Components/HomePage/Services';
import WhyChooseUs from '../Components/HomePage/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;