import "../../assets/css/styles.min.css";
import "../../assets/bootstrap/css/bootstrap.min.css"
import { Fragment } from "react";

function Profile() {
    return(
        <Fragment> 
        <section id="profile_section" className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col">
                    <hr/>
                    <div className="row mt-5">
                        <div className="col-sm-12 col-lg-6 mb-5" style={{backgroundColor:"white"}}>
                            <div className="border rounded border-white p-5" style={{ color: "#000" }}>
                                <h5><strong>Your profile</strong></h5>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6 text-center"><img height={'161px'} width={'161px'} className="rounded-circle img-fluid" alt="qelale profile" src={require("../../assets/img/menal.jpg")}/><button className="btn btn-primary  border rounded border-light mt-2" type="button" style={{ backgroundColor: "rgb(58, 181, 74)",color:"white"  }} data-toggle="modal" data-target="#profile-modal">Update profile</button></div>
                                    <div className="col-sm-12 col-lg-6 mb-5 mt-5" style={{ textAlign: "center" }}>
                                        <h5>Menal Ibrahim</h5>
                                        <p className="mt-3">+251943282835</p>
                                        <p>menalIbrahim@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 mb-5">
                            <div className="border rounded border-white p-5" style={{ background: "#fff" }}>
                                <form>
                                    <h5><strong>Update your personal info</strong></h5>
                                    <hr/>
                                    <div className="form-group"><label>First name</label><input className="form-control" type="text" name="first_name" placeholder="Your first name" required="" minLength="2" maxLength="100"/></div>
                                    <div className="form-group"><label>Last name</label><input className="form-control" type="text" name="last_name" placeholder="Your last name" required="" minLength="2" maxLength="100"/></div>
                                    <div className="form-group"><label>Phone number</label><input className="form-control" type="tel" name="phone_number" placeholder="Your phone number" required=""/></div>
                                    <div className="form-group"><label>Email</label><input className="form-control" type="email" name="email" placeholder="Your email" required=""/></div><button className="btn btn-primary btn-block  border rounded border-light" type="submit" style={{ background: "rgb(58, 181, 74)",color:"white" }}>Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div className="modal fade" role="dialog" tabIndex={-1} id="profile-modal">
        <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            role="document">
            <div className="modal-content">
            <div className="modal-header" style={{ background: "rgb(58, 181, 74)" }}>
                <h4 className="modal-title">
                <strong>Update profile picture</strong>
                </h4>
                <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                >
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                <form className="p-4">
                <div className="form-group">
                    <label>
                    <strong>Profile picture</strong>
                    </label>
                    <input
                    className="form-control-file"
                    type="file"
                    name="profile_picture"
                    required=""
                    accept="image/*"
                    />
                </div>
                <button
                    className="btn btn-primary btn-block  border rounded border-white"
                    type="submit"
                    style={{ background: "rgb(58, 181, 74)",color:"white" }}
                >
                    Update
                </button>
                </form>
            </div>
            <div className="modal-footer">
                <button className="btn btn-light" type="button" data-dismiss="modal">
                Close
                </button>
            </div>
            </div>
        </div>
</div>
        <div style={{height:"80px"}}>

        </div>
        </Fragment>
    )
}

export default Profile;


