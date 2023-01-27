import "../../assets/css/styles.min.css";
import "../../assets/bootstrap/css/bootstrap.min.css"
import { Fragment } from "react";

const VegisList = [];
const Vegis = [
  {
    name: "Karot",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/karot_yl6mar.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/tikil_xrtbdx.jpg',
    price:"800"
  },
  {
    name: "Cabage",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/dinich_uqwouv.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/tikil_xrtbdx.jpg',    price:"600"
  },
  {
    name: "Onion",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/tikil_xrtbdx.jpg',    price:"1000"
  },
  {
    name: "Karot",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/karot_yl6mar.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/tikil_xrtbdx.jpg',
    price:"800"
  },
  {
    name: "Cabage",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/dinich_uqwouv.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/tikil_xrtbdx.jpg',    price:"600"
  },
  {
    name: "Onion",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/tikil_xrtbdx.jpg',    price:"1000"
  },
  {
    name: "Karot",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/karot_yl6mar.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/tikil_xrtbdx.jpg',
    price:"800"
  },
  {
    name: "Cabage",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/dinich_uqwouv.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/tikil_xrtbdx.jpg',    price:"600"
  },
  {
    name: "Onion",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/tikil_xrtbdx.jpg',    price:"1000"
  }
];


function VegiItems({width}) {
  width = width ? width : 2;
  Vegis.forEach(({name, img1, img2, img3, price}, index)=>{
    VegisList.push(
      <div  key={index}  className={"col-6 col-sm-6 col-md-6 col-lg-" + width + " mb-3"}>
      <a href="/vegi" className="card"
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
       {VegisList}
       </Fragment>
    )
}

export default VegiItems;


