import React from "react";
import Nav from 'react-bootstrap/Nav';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../Logo";

function Navbar(){
return(
<Nav className="justify-content-end" activeKey="/home">
     <Logo />
        <Nav.Item>
          <Nav.Link className="nl" href="/Home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="About">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="ContactUs">ContactUs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="ContactUs"><SearchIcon /></Nav.Link> 
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="ContactUs"><AddShoppingCartIcon /></Nav.Link> 
        </Nav.Item> 
     </Nav>
      
)
}

export default Navbar;