import React, { useState } from "react";

import Art from "../Art";

interface Artworks{
    id:number;
    image_id:string;
    title:string;
    artist:string
}

interface ArtListProps{
    artworks:Artworks[]
}

const ArtList:React.FC<ArtListProps>=({artworks})=>{
    return(
    <div>
        {artworks.map(art=>(
            <Art artist_display={art.artist} title={art.title} id={art.id} image_id={art.image_id}/>
        ))}
    </div>
    )
}

export default ArtList