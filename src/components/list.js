import { keys } from "@material-ui/core/styles/createBreakpoints"
import { Rating } from "semantic-ui-react"
import ReactStars from "react-rating-stars-component";

function List({Movies, search, rating, Moviecard}){

    return(
<div>
{Movies
        .filter(
          (el) =>
            el.title.toUpperCase().includes(search.toUpperCase()) &&
            el.rate >= rating
        )
        .map((el) => (
          <Moviecard el={el} />
        ))}

        <div className="background">
            <div className="cards">
            {Movies.map ((el)   => (
                <div>
        <div className="card" style={{width: '18rem'}}>
        <img src={el.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"key={el.id}>{el.name} </h5>
          <ReactStars value={el.Rate} />
          <h6 className="genre">{el.type} </h6>
          
          <p className="card-text">{el.describtion}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      
             </div>
                </div>
                ))
            }



        </div>
        </div>
        </div>
     )              
 }
export default List