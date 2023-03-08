import React from "react";
import "./Home.css";
import Product from "./Product";
import {useEffect} from 'react';

function Home() {
  {/* use to slide after some delays */}
  useEffect(() => Slider(0), []);
  return (
    <div className="home">
      {/* home */}
      <div className="home__container">
      {/* the home container */}
        <div className="homeSliderContainer">
          {/* the home slide that displays after some seconds inside it containes three different images */}
          <div className="homeSlide">
            <img 
              className="homeImg"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg" 
              alt="" 
            />
          </div>
          <div className="homeSlide">
            <img 
              className="homeImg" 
              src="https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_3000x1200._CB4055855145_jpg" 
              alt="" 
            />
          </div> 
          <div className="homeSlide">
            <img 
              className="homeImg" 
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
              alt="" 
            />
          </div>
        </div>
        {/* first row */}
        <div className="home__row">
          {/* Products => Product ID, Title, Rating, Price, Img */}
          {/* the first product */}
          <Product
            id={12323} 
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
            price={1999}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          {/*  second product */}
          <Product 
            id={12323} 
            title="Sumsung LC49RG90SSUXETN 49' Curved LED Gaming Monitor" 
            price={1999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          {/* third product */}
          <Product
            id={12323} 
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
            price={1999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          {/* fourth product*/}
          <Product 
            id={12323} 
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" 
            price={1999}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
        {/* second row */}
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        {/* third row */}
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product 
            id={12323} 
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
            price={1999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product 
            id={12323} 
            title="Sumsung LC49RG90SSUXETN 49' Curved LED Gaming Monitor" 
            price={1999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product 
            id={12323} 
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
            price={1999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        {/* fourth row */}
        <div className="home__row">
          <Product 
            id={12323} 
            title="Sumsung LC49RG90SSUXETN 49' Curved LED Gaming Monitor" 
            price={528}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product 
            id={12323} 
            title="Sumsung LC49RG90SSUXETN 49' Curved LED Gaming Monitor" 
            price={1999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product 
            id={12323} 
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
            price={1389}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
{/* the function for the home slides  */}
function Slider(Counter) {
  const slides = document.querySelectorAll(".homeImg")
  slides.forEach((slide, index) => {
      if (index !== Counter) {
          slide.style.visibility = `hidden`;
          slide.classList.add(`image-${index}`)
      }
  });
  moveCorousal(Counter, slides, slides.length);
}

function moveCorousal(Counter, slides, len) {
  if (slides) {
      if(Counter >= len - 1) Counter = 0;
      else Counter += 1;

      slides.forEach((slide, index) => { 
          if (index === Counter) {
              slide.style.visibility = `visible`;
          } else {
              slide.style.visibility = `hidden`;
          }
      });
  }
  {/* time interval for the home slide */}
  setTimeout(() => {
      moveCorousal(Counter, slides, len);
  }, 4000);
}

export default Home;
//export the home funcion