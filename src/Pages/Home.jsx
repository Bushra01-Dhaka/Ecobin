import React from 'react';
import Banner from '../Components/HomePage/Banner';
import Features from '../Components/HomePage/Features';
import Services from '../Components/HomePage/Services';
import WhyChooseUs from '../Components/HomePage/WhyChooseUs';
import CustomerSupportBanner from '../Components/HomePage/CustomerSupportBanner';
import Faq1 from '../Components/Faq1';
import IntroBanner from '../CustomCompo/IntroBanner';
import MutualBenefits from './MutualBenefits';
import PictureCards from '../CustomCompo/PictureCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <PictureCards></PictureCards>
            <WhyChooseUs></WhyChooseUs>
            <CustomerSupportBanner></CustomerSupportBanner>
            <MutualBenefits></MutualBenefits>
            <IntroBanner></IntroBanner>
            <Faq1></Faq1>
        </div>
    );
};

export default Home;