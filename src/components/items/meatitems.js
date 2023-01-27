import "../../assets/css/styles.min.css";
import "../../assets/bootstrap/css/bootstrap.min.css"
import { Fragment } from "react";

const MeatsList = [];
const Meats = [
  {
    name: "Red Meat",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',    price:"800"
  },
  {
    name: "Fish",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/800px-Blade_steak_ovhtep.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',    price:"600"
  },
  {
    name: "Raw",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/800px-Blade_steak_ovhtep.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',    price:"1000"
  },
  {
    name: "Red Meat",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',    price:"800"
  },
  {
    name: "Fish",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/800px-Blade_steak_ovhtep.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',    price:"600"
  },
  {
    name: "Raw",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/800px-Blade_steak_ovhtep.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',    price:"1000"
  },
  {
    name: "Red Meat",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',
    price:"800"
  },
  {
    name: "Fish",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/800px-Blade_steak_ovhtep.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',    price:"600"
  },
  {
    name: "Raw",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/800px-Blade_steak_ovhtep.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',    price:"1000"
  }
];


function MeatItems({width}) {
  width = width ? width : 2;

  Meats.forEach(({name, img1, img2, img3, price}, index)=>{
    MeatsList.push(
      <div key={index} className={"col-6 col-sm-6 col-md-6 col-lg-" + width + " mb-3"}>
      <a href="/meat" className="card"
        style={{ borderStyle: "solid", textDecoration:"none",borderColor: "#fff", borderRadius: 15 }} >
        <div className="card-body">
          <div className="carousel slide" data-ride="carousel" id="carousel-1">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100 d-block"
                  src={img1}
                  alt="qelal product 1" />
              </div>
              <div className="carousel-item">
                <img  className="w-100 d-block"
                  src={img2}
                  alt="qelal product 2" />
              </div>
              <div className="carousel-item">
                <img className="w-100 d-block"
                  src={img3}
                  alt="qelal product 3" />
              </div>
            </div>
            <ol className="carousel-indicators">
              <li key={1} data-target="#carousel-1" data-slide-to={0} className="active" />
              <li key={2} data-target="#carousel-1" data-slide-to={1} />
              <li key={3} data-target="#carousel-1" data-slide-to={2} />
            </ol>
          </div>
          <div  id="item-header">
            <h3 className="text-center mb-1" style={{ color: "rgb(58, 181, 74)" }}>
              {name}
            </h3>
          </div>
          <hr />
          <h6 className="text-muted card-subtitle mt-3 mb-3">
            <i className="fas fa-dollar-sign" />
            &nbsp;Price - <strong>{price}</strong>&nbsp;
          </h6>
          <h6 className="text-muted card-subtitle mb-3">
            <i className="fas fa-circle-notch" style={{ fontSize: 12 }} />
            &nbsp;Status - <strong>Fresh</strong>
          </h6>
          <p style={{ color: "rgb(58, 181, 74)" }}>By Fresh Corner</p>
        </div>
      </a>
   </div>
    )
  })

    return(
      <Fragment>
       {MeatsList}
       </Fragment>
    )
}

export default MeatItems;


