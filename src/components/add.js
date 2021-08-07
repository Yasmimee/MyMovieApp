import { useState } from "react"
import {Modal, Button} from "react-bootstrap"
import ReactStars from "react-rating-stars-component";


function Add({Movies,setMovies, Rating}) {
  const [show, setShow] = useState(false);
  const [text , setText] = useState('');
  const [type, settype]= useState('');
  const [url, seturl]=useState('');
  const [des, setdes]=useState('');
  const [rating, setRating] = useState(0);
  const RatingExampleRating = () => <Rating />

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => {
    setMovies([...Movies, { id: Math.random(), name: text, type:type, img:url,describtion: des, rate:<Rating/> }]);
    };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add A New Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Movie Title :</label><br></br>
        <input type='text' value={ text}  onChange={(e)=> setText(e.target.value)} ></input><br></br>
        <label>Movie Genre :</label><br></br>
        <input type='text' value={ type}  onChange={(x)=> settype(x.target.value)} ></input><br></br>
        <label>Poster URL :</label><br></br>
        <input type='text' value={ url}  onChange={(c)=> seturl(c.target.value)} ></input><br></br>
        <label>Movie Rating</label> <br></br>
        <input></input> <br></br>
        <label>Movie Describtion</label><br></br>
        <textarea type='text' value={ des}  onChange={(d)=> setdes(d.target.value)}></textarea><br></br>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick ={handleAdd}>Add Movie</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add