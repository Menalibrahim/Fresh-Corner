import "../assets/css/styles.min.css";
import "../assets/bootstrap/css/bootstrap.min.css"
import Advertisment from "./advertisment/advertisment";
import { Fragment } from "react";
import MeatItems from "./items/meatitems";
import VegiItems from "./items/vegis_items";
import ContactUs from './contact_us/contact_us.js';

function Home() {
    return(
        <Fragment>
        <Advertisment />
        <section id="company_posts" className="mt-5">
        <div className="container-fluid px-3">
            <div className="row">
                <div className="col-sm-12">
                    <h2 style={{color: 'rgb(58, 181, 74)'}}><strong>Gardens</strong></h2>
                    <hr/>
                    <div className="row mt-4">
                        <VegiItems/>
                        </div>
                </div>
                <div className="col-sm-12" style={{marginTop:"20px"}}>
                    <h2 style={{color: 'rgb(58, 181, 74)'}}><strong>Meats</strong></h2>
                    <hr/>
                    <div className="row mt-4">
                        <MeatItems/>
                        </div>
                </div>
                </div>
        </div>
        </section>

            <ContactUs/>

        </Fragment>
    )
}

export default Home;