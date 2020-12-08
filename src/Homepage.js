import React, { Component } from 'react';
import './Homepage.css';
import Card from './Card';



class Homepage extends Component {


    render() {

        return (

            <div>
                <div className="image-container">

                    <div className="logo">
                        <div className="logo-text">yum..! Tasty</div>
                    </div>

                    <div className="Heading">
                        Find the best restaurants, cafés, and bars
                    </div>

            <div className="Select-location">
                     <select className="selector1">
                       <option selected>Select Location</option>
                       <option>Delhi</option>
                       <option>Bangalore</option>
                       <option>Patna</option>
                       <option>Ranchi</option>
                       <option>Goa</option>

                    </select>
                  &nbsp; &nbsp;
           <input className="selector2" type="text" placeholder="Search For Restaurants"/>

         </div>
          </div>

          <section className="Quick-Search">
            <div className="Heading-Search">Quick Search </div>
            <div className="Subheading-Search">Discover restaurants by type of meal</div>

        </section>

       
        <div className="container-fluid">
            

                  <Card heading="Lunch" details="Get Lunch" />
                  <Card heading="Dinner" details="Get Lunch" />
                  <Card heading="Life Style" details="Get Lunch" />
                  <Card heading="Drink" details="Get Lunch" />
                  <Card heading="Breakfast" details="Get Lunch" />
                  <Card heading="Night Life" details="Get Lunch" />
                  
                  

        </div>
  

              
         




         
                         
     </div>








        );
    }
}

export default Homepage;

