import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import CardArray from './components/CardArray';
import Navbar from "./components/Navbar";
import Header from "./Header";
//import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
    <Navbar />
    {/*<h2 className="header"><span><img className="img" src="/images/FC1.png" alt="freshcorner" /></span></h2>*/}
    <Header />
  {CardArray.map ((x) => {
  return (
   <Cards 
    key={x.id}
    img={x.img}
    title={x.title}
    text={x.text}
    btn={x.btn}
    />

)})}
    {/*<Footer />*/}
    </div>
  );
}

export default App;
