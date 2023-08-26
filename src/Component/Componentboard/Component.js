import React from "react";
import Navbar from "../Navbar/Navbar";
import { Button,Card,CardBody,CardTitle,CardText,CardSubtitle,CardLink } from "reactstrap";
import './Component.css';
import Cards from '../Cards/Cards';

export default function Component() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid Componentdashboard">
        <div>
          <h1>Components</h1>
          {/* Buttons */}
         <div className="gridscontent">
          <div className="Buttonsgrid">
            <h2>Buttons</h2>
            <div>
              <Button color="primary">Split Button primary</Button>
            </div>
            <div>
              <Button>Split Button secondary</Button>
            </div>
            <div>
              <Button color="success">Split Button success</Button>
            </div>
            <div>
              <Button color="info">Split Button info</Button>
            </div>
            <div>
              <Button color="warning">Split Button warning</Button>
            </div>
            <div>
              <Button color="danger">Split Button danger</Button>
            </div>
            <div>
              <Button color="link">Split Button link</Button>
            </div>
          </div>
         {/* Designs */}

         <div className="Cardsgrid">
            <h2>Cards</h2>
              <Cards/>
           


      
           
          </div>


         



          </div>
        </div>
      </div>
    </div>
  );
}
