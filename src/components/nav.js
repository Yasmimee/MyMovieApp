function Navb(){
    return(
      <div >
        <div className="nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My Movie App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">List</a>
        <a className="nav-link" href="#" >Add a Movie</a>
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">search</a>
      </div>
    </div>
  </div>
</nav>
</div>
<div className="main-img">
  <img src="https://wallpaperaccess.com/full/329585.jpg"></img>
</div>


</div>
    )
}
export default Navb