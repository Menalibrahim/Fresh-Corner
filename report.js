

import "../../assets/css/styles.min.css";
import "../../assets/bootstrap/css/bootstrap.min.css"
import { Fragment } from "react";

function Report() {
    return(
        <Fragment>
            <section id="report" className="mt-5 p-5" style={{background: "rgb(58, 181, 74)"}}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h1 className="text-center text-white">Report</h1>
                    <hr className="w-50"/>
                    <p className="text-center text-secondary mx-auto w-75">Help us by reporting any posts which are not appropriate on the system. Learn more about our guidelines using the link below.</p><button className="btn btn-light border rounded border-secondary" type="button">Guideline</button><button className="btn btn-light border rounded border-secondary ml-2" type="button" data-toggle="modal" data-target="#report-modal">Report</button>
                </div>
            </div>
        </div>
    </section>

    <div className="modal fade" role="dialog" tabIndex="-1" id="report-modal">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
                <div className="modal-header" style={{background: "rgb(58, 181, 74)"}}>
                    <h4 className="modal-title"><strong>Report</strong></h4><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div className="modal-body">
                    <form className="p-4">
                        <div className="form-group"><label><strong>Link of the post</strong></label><input className="form-control" type="text" name="post_link" placeholder="Post link" required=""/></div><button className="btn btn-primary btn-block text-dark border rounded border-white" type="submit" style={{background: "rgb(58, 181, 74)"}}>Submit</button>
                    </form>
                </div>
                <div className="modal-footer"><button className="btn btn-light" type="button" data-dismiss="modal">Close</button></div>
            </div>
        </div>
    </div>
        </Fragment>
    )
}

export default Report;
