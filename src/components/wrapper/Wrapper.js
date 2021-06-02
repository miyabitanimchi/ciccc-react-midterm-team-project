import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Wrapper = ({ children }) => (
  <>
    <Header />
      <section className="main">
        { children }
      </section>
    <Footer />
  </>
);

export default Wrapper