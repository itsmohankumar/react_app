import React from "react"
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import Head from './components/Head/head'
import Company from "./components/Company/company"
import Fluided from "./components/Fluid/fluid"
import Honest from "./components/Honest/honest"
import Count from "./components/Count/count"
import Basic from './components/Basics/Basic'
import TechnologyStack from './components/TechnologyStack/TechnologyStack'
import Feedback from './components/Feedback/Feedback'


import './App.css';
import Pic1 from './assets/img/portfolio/thumbnails/1.jpg'
import Pic2 from './assets/img/portfolio/thumbnails/2.jpg'
import Pic3 from './assets/img/portfolio/thumbnails/3.jpg'
import Pic4 from './assets/img/portfolio/thumbnails/4.jpg'
import Pic5 from './assets/img/portfolio/thumbnails/5.jpg'
import Pic6 from './assets/img/portfolio/thumbnails/6.jpg'
import Fluid from "./components/Fluid/fluid"

function App() {
  window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    // const mainNav = document.body.querySelector('#mainNav');
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#mainNav',
    //         offset: 74,
    //     });
    // };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    // new SimpleLightbox({
    //     elements: '#portfolio a.portfolio-box'
    // });

    

});
  return (
    <div>
        <Header></Header>
        <Head></Head>
      
        <Company></Company>
        <Fluided></Fluided>
        <Honest></Honest>
        <Count></Count>
        <Basic></Basic>
        <TechnologyStack></TechnologyStack>
        <Feedback></Feedback>
        

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>
        
        <script src="js/scripts.js"></script>
        
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        

        <Footer></Footer>
      
    </div>
  );
}

export default App;
