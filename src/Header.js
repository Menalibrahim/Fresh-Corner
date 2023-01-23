import React from "react";
import Button from '@mui/material/Button';

function Header(){
    return(
        <div className="header">
        <img className="titleimg" src="images/vegetable.png" alt="titleimg"/>
          <h1>Fresh Fruits... For A Healthier Life</h1>
          <p>Enjoy a healthy life by eating healthy foods that have extraordinary flavours that makes your life.</p>
          <Button className="view-detail" variant="contained">View Details</Button>

          </div>
    )
}

export default Header;