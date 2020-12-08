import React, {Component} from 'react';
import './Card.css';
import breakfast from './images/image-1.png';

class Card extends Component{
    
    render()
    {
        return(
             

            <div className="Card">
                   
                   <div className="image-tile">
                       <img src={breakfast} />

                   </div>
                   <div className="details">
                       
                       <div className="Card-Heading">
                           
                           {this.props.heading}

                       </div>

                       <div className="Card-Details">

                         {this.props.details}
                        
                       </div>
                        
                          
                   </div>

                                    

                 
            </div>






        )
    }

}

export default Card;




