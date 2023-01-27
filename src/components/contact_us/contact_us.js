

import "../../assets/css/styles.min.css";
import "../../assets/bootstrap/css/bootstrap.min.css"
import { Fragment } from "react";

function ContactUs() {
    return(
        <Fragment>
            <section id="contactus" className="mt-5 p-5">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <h1 className="text-center text-dark">Contact us</h1>
        <hr className="w-50" />
        <p className="text-center text-secondary mx-auto w-75">
          Send us your message using the form below
        </p>
        <div className="p-5 mt-5" style={{ background: "#fff" }}>
          <form>
            <div className="form-row">
              <div className="col-sm-12 col-lg-6">
                <div className="form-group">
                  <label>First name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="first_name"
                    placeholder="Your first name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="last_name"
                    placeholder="Your last name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required=""
                  />
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div className="form-group">
                  <label>Phone number</label>
                  <input
                    className="form-control"
                    type="tel"
                    name="phone_number"
                    placeholder="Your phone number"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
                <button className="btn btn-primary btn-block text-dark border rounded border-light"
                  type="submit"
                  style={{ background: "rgb(58, 181, 74)" }}>
                  <strong>Send</strong>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

        </Fragment>
    )
}

export default ContactUs;
