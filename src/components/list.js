import { keys } from "@material-ui/core/styles/createBreakpoints"

function List({Movies}){

    return(


        <div className="background">
            <div className="cards">
            {Movies.map ((el)   => (
                <div>
        <div className="card" style={{width: '18rem'}}>
        <img src={el.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"key={el.id}>{el.name} </h5>
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
     )              
 }
export default List