import "../../assets/css/styles.min.css";
import "../../assets/bootstrap/css/bootstrap.min.css"
import { Fragment } from "react";

function Images({imgs}) {
    return(
        <div className="col-sm-12 col-lg-6 mb-3">
                            <div className="text-center">
                                <div className="d-none d-lg-block mt-5">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-lg-6"><a href={imgs[0]}><img className="" height={"127px"} width={"225"} src={imgs[0]} alt="buy item from fresh corner"/></a></div>
                                        <div className="col-12 col-lg-6"><a href={imgs[1]}><img className="" height={"127px"} width={"225"}  src={imgs[1]} alt="buy item from fresh corner"/></a></div>
                                        <div className="col-12 col-lg-6"><a href={imgs[2]}><img className="" height={"127px"} width={"225"} src={imgs[2]} alt="buy item from fresh corner"/></a></div>
                                        <div className="col-12 col-lg-6"><a href={imgs[0]}><img className="" height={"127px"} width={"225"} src={imgs[0]} alt="buy item from fresh corner"/></a></div>
                                    </div>
                                </div>
                                <div className="carousel slide d-xs-block d-sm-block d-md-block d-lg-none d-xl-none" data-ride="carousel" id="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active"><img className="w-100 d-block" src={imgs[1]} alt="buy item from fresh corner" /></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src={imgs[2]} alt="buy item from fresh corner"/></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src={imgs[0]} alt="buy item from fresh corner" /></div>
                                    </div>
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel" data-slide-to="1"></li>
                                        <li data-target="#carousel" data-slide-to="2"></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
    )
    
}

function VegiProduct() {

    const Meats = 
        {
          name: "Meats",
          img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/800px-Blade_steak_ovhtep.jpg',
        img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',
        img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',
          price:"800",
          description: `Meat is animal flesh that is eaten as food. Humans have hunted, farmed, 
          and scavenged animals for meat since prehistoric times. The establishment of settlements 
          in the Neolithic Revolution allowed the domestication of animals such as chickens, sheep, rabbits, pigs, and cattle,
          the flesh of an animal, typically a mammal or bird, as food (the flesh of domestic fowls is sometimes distinguished as poultry `,
           phone: "0942039398"
        }
    
    return(
        <Fragment>

    <section id="post_detail" className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                        <Images imgs={[Meats.img1, Meats.img2, Meats.img3]} />

                        <div className="col-sm-12 col-lg-6 mb-3 pt-5 px-5">
                            <h3 style={{ color: "rgb(58, 181, 74)" }}>
                                <strong>{Meats.name}</strong>
                            </h3>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <button
                                className="btn btn-primary border rounded border-white"
                                // role="button"
                                style={{ background: "rgb(58, 181, 74)", color:"white" }}
                                // href="cart.html"
                                >
                                Add to cart
                                </button>
                            </div>
                            <p>
                                <strong>Description</strong>
                            </p>
                            <hr />
                            <p className="text-secondary">
                                {Meats.description}
                            </p>
                            <hr />
                            <p>
                                <strong>Location</strong>
                            </p>
                            <hr />
                            <p className="text-secondary">Addis Ababa</p>
                            <hr />
                            <p>
                                <strong>Price</strong>
                            </p>
                            <hr />
                            <p className="text-secondary">ETB&nbsp;{Meats.price}</p>
                            <hr />
                            <p>
                                <strong>Contact us</strong>
                            </p>
                            <hr />
                            <div className="d-flex">
                                <p className="text-secondary">Phone number -&nbsp;</p>
                                <p className="text-secondary">{Meats.phone}</p>
                            </div>
                            <div className="d-flex">
                                <p className="text-secondary mr-2">Telegram -&nbsp;</p>
                                <a href="/">t.me/FreshCorner</a>
                            </div>
                            <hr />
                            <p>
                                <strong>Delivery</strong>
                            </p>
                            <hr />
                            <p className="text-secondary">
                                Bolle atlas
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <div style={{height:"80px"}}>

    </div>
        </Fragment>
    )
}

export default VegiProduct;


