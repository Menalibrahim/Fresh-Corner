import "../assets/css/styles.min.css";
import "../assets/bootstrap/css/bootstrap.min.css"
import { Fragment } from "react";
import {Outlet} from 'react-router-dom';
import About from "./about";
import MyFooter from "./footer";

function NavBar() {
    return(
        <Fragment>
        <section id="navbar" style={{ background: "rgb(58, 181, 74)" }}>
        <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <nav className="navbar navbar-light navbar-expand-lg py-3">
                <div className="container-fluid">
                    <a
                    className="navbar-brand"
                    href="/"
                    style={{ fontFamily: "Montserrat, sans-serif",color:"white" }}
                    >
                    <strong>Fresh Corner</strong>
                    </a>
                    <form className="form-inline">
                    <div className="d-flex">
                        <select className="form-control w-25" name="search_type">
                        <optgroup label="Choose">
                            <option value="All">
                            All
                            </option>
                            <option value="Tsom">Tsom</option>
                            <option value="Fisig">Fisig</option>
                        </optgroup>
                        </select>
                        <input
                        className="form-control"
                        type="text"
                        name="search_query"
                        placeholder="Search"
                        required=""
                        />
                        <button
                        className="btn btn-dark text-white border-dark justify-content-center"
                        type="submit"
                        >
                        <i
                            className="fas fa-search text-center mx-auto mr-2"
                            style={{ fontSize: 16 }}
                        />
                        </button>
                    </div>
                    </form>
                    <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav ml-auto float-right">
                       
                        <li className="nav-item">
                        <a className="nav-link active" href="cart.html">
                            <i style={{color:"white"}} className="fas fa-shopping-cart mr-1" />
                            <b>Cart</b>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="profile.html">
                            <i style={{color:"white"}} className="fas fa-user-alt mr-1" />
                            <b>Profile</b>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
            </div>
        </div>
        </section>
        <Outlet/>
        <About/>
        <MyFooter/>
        </Fragment>
    )
}

export default NavBar;