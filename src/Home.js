import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
      <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
          <div className="home__row">
                <Product title="The Lean Strat up" price={29.99} id={1} rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW0p18t3hovGpFQs5tlRLI69Y-ZwY7XbVPUA&usqp=CAU"/>
              <Product title="the Perfect Couple up" price={39.99} id={2} rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW0p18t3hovGpFQs5tlRLI69Y-ZwY7XbVPUA&usqp=CAU"/> 
          </div>

          <div className="home__row">
               <Product title="the Arroha Strat up" price={49.99} id={3} rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW0p18t3hovGpFQs5tlRLI69Y-ZwY7XbVPUA&usqp=CAU"/>
               <Product title="the oYpo Strat up" price={59.99} id={4} rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW0p18t3hovGpFQs5tlRLI69Y-ZwY7XbVPUA&usqp=CAU"/>
               <Product title="the Aksha Strat up" price={69.99} id={5} rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW0p18t3hovGpFQs5tlRLI69Y-ZwY7XbVPUA&usqp=CAU"/>
          </div>
          
          <div className="home__row"> 
             <Product title="the Ayush Strat up"  rating={5} price={29.99} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW0p18t3hovGpFQs5tlRLI69Y-ZwY7XbVPUA&usqp=CAU"/>
          </div>
          
          
          
          
          
            </div>
         </div>





    )
}

export default Home
