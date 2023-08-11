/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../../Components/Hero/Hero';
import CardSection from '../../Components/CardSection/CardSection';
import TrendingSection from '../../Components/TrendingSection/TrendingSection';
import SecondSec from '../../Components/SecondSec/SecondSec';
import FourthSec from '../../Components/CardSection/FourthSec';
import FifthSec from '../../Components/CardSection/FifthSec';

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <TrendingSection></TrendingSection>
      <SecondSec></SecondSec>
      <CardSection></CardSection>
      <FourthSec></FourthSec>
      <FifthSec></FifthSec>
    </>
  );
};

export default Home;
