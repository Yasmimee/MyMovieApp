import cruella from '../images/cruella.jpg';
import mulan from '../images/mulan.jpg';
import mal from '../images/maleficent.jpg';
import dead from '../images/dead.jpg';
import black from '../images/blackwidow.jpeg';
import getout from'../images/Getout.png';
import mebeforeyou from '../images/mebforeyou.jpg';
import yourname from '../images/yourname.png';
import callme from '../images/callmeby.jpg';
import john from '../images/johnwick.jpg';
import us from '../images/us.jpg';
import parasite from '../images/parasite.jpg';
import quiet from '../images/quietplace.jpg';

function movies() {
 return(
    <div className='movies'>
                                       {/* DISNEY */}

        <div className="disney">
        <div className="card" >
    <img className="card-img-top" src={cruella} alt="cruella"></img>
    <div className="card-body">
      <h5 className="card-title">Cruella Devil</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div>
  <div className="card" >
    <img className="card-img-top" src={mulan} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Mulan</h5>

      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div>      
    <div className="card" >
    <img className="card-img-top" src={mal} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Maleficent</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div> 
  </div> 
                                        {/* ROMANCE  */}


  <div className="Romance">
  <div className="card" >
    <img className="card-img-top" src={yourname} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Your Name</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div> 
  <div className="card" >
    <img className="card-img-top" src={mebeforeyou} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Me Before You</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div> 
  <div className="card" >
    <img className="card-img-top" src={callme} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Call Me By Your Name</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div> 
      </div> 
                                            {/* ACTION */}

      <div className='action'>
      <div className="card" >
    <img className="card-img-top" src={john} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">John Wick</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div> 
  <div className="card" >
    <img className="card-img-top" src={black} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Black Widow</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div> 
  <div className="card" >
    <img className="card-img-top" src={dead} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Deadpool</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div> 
      </div>
                                        {/* Thriller */}

        <div className='thriller'>
        <div className="card" >
    <img className="card-img-top" src={parasite} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Parasite</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div> 
  <div className="card" >
    <img className="card-img-top" src={us} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Us</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div> 
  <div className="card" >
    <img className="card-img-top" src={quiet} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title"> A quiet Place </h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div> 
            </div>                                
    </div>
 );
}
export default movies
