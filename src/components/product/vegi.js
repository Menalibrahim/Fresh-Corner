import "../../assets/css/styles.min.css";
import "../../assets/bootstrap/css/bootstrap.min.css"
import { Fragment } from "react";

function Images({imgs}) {
    return(
        <div className="col-sm-12 col-lg-6 mb-3">
                            <div className="text-center">
                                <div className="d-none d-lg-block mt-5">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-lg-6"><a href={imgs[0]}><img className="" height={"127px"} width={"225"} src={imgs[0]} alt="buy Foods from Fresh Corner"/></a></div>
                                        <div className="col-12 col-lg-6"><a href={imgs[1]}><img className="" height={"127px"} width={"225"}  src={imgs[1]} alt="buy Foods from Fresh Corner"/></a></div>
                                        <div className="col-12 col-lg-6"><a href={imgs[2]}><img className="" height={"127px"} width={"225"} src={imgs[2]} alt="buy Foods from Fresh Corner"/></a></div>
                                        <div className="col-12 col-lg-6"><a href={imgs[0]}><img className="" height={"127px"} width={"225"} src={imgs[0]} alt="buy Foods from Fresh Corner"/></a></div>
                                    </div>
                                </div>
                                <div className="carousel slide d-xs-block d-sm-block d-md-block d-lg-none d-xl-none" data-ride="carousel" id="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active"><img className="w-100 d-block" src={imgs[1]} alt="buy Foods from Fresh Corner" /></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src={imgs[2]} alt="buy Foods from Fresh Corner"/></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src={imgs[0]} alt="buy Foods from Fresh Corner" /></div>
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

    const Vegis = 
        {
          name: "Vegitable",
          img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824652/green/shinkurt_mmg2rh.jpg',
          img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/karot_yl6mar.jpg',
          img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/green/tikil_xrtbdx.jpg',
          price:"800",
          description: `The carrot (Daucus carota subsp. sativus) is a root vegetable, typically orange in color,
           though purple, black, red, white, and yellow cultivars exist,[2][3][4] all of which are domesticated forms 
           of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. The plant probably originated in 
           Persia and was originally cultivated for its leaves and seeds. The most commonly eaten part of the plant is 
           the taproot, although the stems and leaves are also eaten. The domestic carrot has been selectively bred for 
           its enlarged, more palatable, less woody-textured taproot.`,
           phone: "0942039398"
        }
    
    return(
        <Fragment>

    <section id="post_detail" className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                        <Images imgs={[Vegis.img1, Vegis.img2, Vegis.img3]} />

                        <div className="col-sm-12 col-lg-6 mb-3 pt-5 px-5">
                            <h3 style={{ color: "rgb(58, 181, 74)" }}>
                                <strong>{Vegis.name}</strong>
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
                                {Vegis.description}
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
                            <p className="text-secondary">ETB&nbsp;{Vegis.price}</p>
                            <hr />
                            <p>
                                <strong>Contact us</strong>
                            </p>
                            <hr />
                            <div className="d-flex">
                                <p className="text-secondary">Phone number -&nbsp;</p>
                                <p className="text-secondary">{Vegis.phone}</p>
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


