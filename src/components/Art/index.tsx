import React from "react";
import './style.css'

interface Art{
    id:number;
    title:string;
    image_id:string;
    artist_display:string;
}


const Art:React.FC<Art>=({id,title,image_id,artist_display})=>{
    return(
        <div className="art">
            <div className="art__image">
                <img src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`} alt={title} />
            </div>
            <div className="art__details">
                <p>{title}</p>
                <p>{artist_display}</p>
            </div>
        </div>
    )
}

export default Art