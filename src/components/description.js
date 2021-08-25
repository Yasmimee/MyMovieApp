import { useParams} from 'react-router-dom'
import React from 'react'
function Description ({Movies}){
    const { id } = useParams();
    const foundmovie = Movies.find((el) => el.id == id);
    return(
        <div>
            <h1>{foundmovie.name}</h1>
            <img src={foundmovie.img} style={{ width: '200px' }}></img>
            <p style={{ fontSize: "16pt" }}>{foundmovie.describtion}</p>
            <iframe src={foundmovie.trailer}></iframe>
            
            
        </div>

    )
}
export default Description