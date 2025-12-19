import { useNavigate } from "react-router-dom";
import React from "react";
const MovieCard = ({item})=>{
    const Navigate = useNavigate();
    return(
        <div 
        className="MovieCard"
        onClick={()=> Navigate(`/Movie/${item.id}`)}
        >
            <img >src={item.poster} 
            alt={item.title}</img>
            <h3>{item.title}</h3>
        </div>
    );
};
export default MovieCard;