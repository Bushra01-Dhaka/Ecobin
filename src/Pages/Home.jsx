import React from 'react';
import Banner from '../Components/HomePage/Banner';
import Features from '../Components/HomePage/Features';
import Services from '../Components/HomePage/Services';
import WhyChooseUs from '../Components/HomePage/WhyChooseUs';
import CustomerSupportBanner from '../Components/HomePage/CustomerSupportBanner';
// import Faq from '../Components/Faq';
import Faq1 from '../Components/Faq1';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <CustomerSupportBanner></CustomerSupportBanner>
            {/* <Faq></Faq> */}
            <Faq1></Faq1>
        </div>
    );
};

export default Home;