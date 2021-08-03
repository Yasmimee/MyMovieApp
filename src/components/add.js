import { useState } from "react"


function Add(Movies,setMovies){


    const [show, setShow] = useState(false);
    const toggle=()=>{
        setShow (!show)

    };
    const [text , setText] = useState('');
    
    
      // const handleAdd = () => {
      //   setMovies([...Movies, { id: Math.random(), name: text }]);
      // };
      const handleadd =() =>{
        console.log("hello")
        setMovies([...Movies, {id:Math.random()}])
      }
    
    

    return(
        <div className="add">
  
<button className="btn btn-primary" data-bs-toggle="modal" onClick={toggle} >
  Add A New Movie 
</button>{show && 
<div>
  
    <label>Movie Name</label><br></br>
    <input type='text' value={ text}  onChange={(e)=> setText(e.target.value)} ></input><br></br>
    
    <button onClick ={handleadd}>Add</button>
    <button>Cancel</button>
</div>}


        </div>

    )
}
export default Add