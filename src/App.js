import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router> {/* wrap root .js with router to provide the link and working with it.
    - Router is faster and more efficient way to link endpoints */}
      <GlobalStyle />
      <Hero /> {/* Hero from the hero component */}
      <ContactUs />
      <Products heading ='Choose your favorite' data={productData} />
            {/* Here heading and data are given a value, we use this in index.js of Products component */}
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} /> 
      {/* Here heading and data are given a value, we use this in index.js of Products component */}
      <Footer />
    </Router>
  );
}
export default App; 
