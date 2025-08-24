import React, { useState } from "react";

import Art from "../Atr";

interface ArtListProps{
    searchQuary:string
}

interface Artworks{
    id:number;
    image_id:string;
    title:string;
    artist:string
}

const ArtList:React.FC=()=>{
    const [artworks, setArtworks]=useState<Artworks[]>([])


    const fetchArts=async()=>{
        try{
            const response=await fetch('https://api.artic.edu/api/v1/artworks')
            const data = await response.json()
            setArtworks(data.data)
            console.log(data.data)
        }
        catch(err){
            console.log(err)
        }
    }

    fetchArts()


    return(
    <div>
        {artworks.map(art=>(
            <Art artist_display={art.artist} title={art.title} id={art.id} image_id={art.image_id}/>
        ))}
    </div>
    )
}

export default ArtList