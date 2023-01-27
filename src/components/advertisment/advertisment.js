import "../../assets/css/styles.min.css";
import "../../assets/bootstrap/css/bootstrap.min.css"

function Advertisment() {
    return(
<section id="advertisment" className="mt-5">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        <div
          className="carousel slide"
          data-ride="carousel"
          data-interval={2000}
          id="carousel-19"
        >
          <div className="carousel-inner">
            <div className="carousel-item active"  style={{"height":"300px"}}>
              <img  style={{"height":"300px"}}
                className="img-fluid w-100 d-block"
                src={require("../../assets/img/meat.png")}
                alt="Fresh Corner item 1"
              />
            </div>
            <div className="carousel-item" style={{"height":"300px"}}>
              <img
                className="w-100 d-block"  style={{"height":"300px"}}
                src={require("../../assets/img/fruits.png")}
                alt="Fresh Corner item  2"
              />
            </div>
            <div className="carousel-item"  style={{"height":"300px"}}>
              <img
                className="w-100 d-block"  style={{"height":"300px"}}
                src={require("../../assets/img/dairy.png")}
                alt="Fresh Corner item  3"
              />
            </div>
          </div>
          <div>
            {/* Start: Previous */} 
            <a
              className="carousel-control-prev"
              href="#carousel-19"
              role="button"
              data-slide="prev"  >
              <span className="carousel-control-prev-icon" />
              <span className="sr-only">Previous</span>
            </a>
            {/* Start: Next */}
            <a
              className="carousel-control-next"
              href="#carousel-19"
              role="button"
              data-slide="next" >
              <span className="carousel-control-next-icon" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#carousel-19" data-slide-to={0}
              className="active" />
            <li data-target="#carousel-19" data-slide-to={1} />
            <li data-target="#carousel-19" data-slide-to={2} />
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Advertisment;