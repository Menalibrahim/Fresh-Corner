

import "../assets/css/styles.min.css";
import "../assets/bootstrap/css/bootstrap.min.css"

function MyFooter() {
    return(
           <section id="bottom-navbar" className="fixed-bottom d-xs-block d-sm-block d-md-block d-lg-none" style={{background: "rgb(58, 181, 74)",marginTop: "200px"}}>
        <div className="d-flex justify-content-between fixed-bottom px-3" style={{background: "rgb(58, 181, 74)"}}>
             <div className="text-center mt-2"><a href="cart.html"><i className="fas fa-shopping-cart" style={{fontSize: "20px",color: "#fff"}}></i></a>
                <p style={{fontSize: "14px"}}><strong>Cart</strong></p>
            </div>
            <div className="text-center mt-2"><a href="profile.html"><i className="fas fa-user-alt" style={{fontSize: "20px",color: "#fff"}}></i></a>
                <p style={{fontSize: "14px"}}><strong>Profile</strong></p>
            </div>
           
        </div>
     </section>
    )
}

export default MyFooter;
