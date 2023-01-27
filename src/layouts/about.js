import "../assets/css/styles.min.css";
import "../assets/bootstrap/css/bootstrap.min.css"

function About() {
    return(
        <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
            <h6>Posts</h6>
            <hr />
            <div className="mb-2">
                <a className="text-secondary" href="browse.html">
                Browse
                </a>
            </div>
            <div className="mb-2">
                <a className="text-secondary" href="post.html">
                Post
                </a>
            </div>
            <div className="mb-2">
                <a className="text-secondary" href="cart.html">
                Cart
                </a>
            </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
            <h6>Pages</h6>
            <hr />
            <div className="mb-2">
                <a className="text-secondary" href="browse.html">
                About
                </a>
            </div>
            <div className="mb-2">
                <a className="text-secondary" href="post.html">
                Guideline
                </a>
            </div>
            <div className="mb-2">
                <a className="text-secondary" href="cart.html">
                Report
                </a>
            </div>
            <div className="mb-2">
                <a className="text-secondary" href="cart.html">
                Contact us
                </a>
            </div>
            <div className="mb-2">
                <a className="text-secondary" href="termspolicy.html">
                Terms &amp; Policy
                </a>
            </div>
            </div>
            <div className="col-sm-12 col-lg-6 mb-3">
            <h6>About</h6>
            <hr />
            <p className="text-secondary">
            We operate 11 Fresh Corner retail outlets across Addis Ababa offering a wide variety of fresh grocery products at affordable prices.
            </p>
            </div>
            <div className="col-sm-12 text-center text-secondary mt-5">
            <p>Copyright @ Fresh Corner 2023</p>
            </div>
        </div>
        </div>
    )
}

export default About;
