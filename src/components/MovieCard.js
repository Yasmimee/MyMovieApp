import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'
function MovieCard({ el }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={el.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" key={el.id}>
          {el.name}{" "}
        </h5>
        <ReactStars value={el.rate} />
        <h6 className="genre">{el.type} </h6>
        <p className="card-text">{el.describtion}</p>
        <Link to={`/movies/${el.id}`}>

        
        <button href="#" className="btn btn-primary">
          More details
        </button></Link>
      </div>
    </div>
  );
}
export default MovieCard ;