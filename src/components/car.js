import cruella from '../images/cruella.jpg';
import yourname from '../images/yourname.png';
import parasite from '../images/parasite.jpg';
import carousel from 'react'
function car(){
    return (
        <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={cruella} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item active ">
          <img src={yourname} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item active">
          <img src={parasite} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
</div>
    );
}
export default car