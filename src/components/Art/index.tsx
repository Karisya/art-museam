import React from "react";

interface Art{
    id:number;
    title:string;
    image_id:string;
    artist_display:string;
}


const Art:React.FC<Art>=({id,title,image_id,artist_display})=>{
    return(
        <div>
            <div>
                <img src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>{artist_display}</p>
            </div>
        </div>
    )
}

export default Art