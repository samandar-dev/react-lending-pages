import React from 'react';
import ReactDOM from 'react-dom/client';
import Header_Hero from './companents/hero-header/Header-Hero'
import Desc from './companents/main/description/Desc'
import Learn from './companents/main/learn/Learn'
import Webinar from './companents/main/webinar/Webinar'
import Apps from './companents/main/apps/Apps'
import Pricing from './companents/main/pricing/Pricing'
import FooterFile from './companents/footer/Footer'
import './index.css'

const Header__Hero = ReactDOM.createRoot(document.getElementById('hero-header'));
const Main = ReactDOM.createRoot(document.getElementById('main'));
const Footer = ReactDOM.createRoot(document.getElementById('footer'));

Header__Hero.render(
  <Header_Hero />
);
Main.render(
  <>
    <Desc />
    <Learn />
    <Webinar />
    <Pricing />
    <Apps />
  </>
);
Footer.render(
  <FooterFile />
);