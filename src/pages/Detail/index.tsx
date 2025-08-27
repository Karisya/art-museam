import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import './style.css'

interface Art{
    id:number;
    image_id:string;
    title:string;
    artist_display:string;
    dimensions:string;
    inscriptions:string;
    exhibition_history:string;
    place_of_origin: string;
}

const Detail:React.FC=()=>{


    const {id}=useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [art, setArt]=useState<Art|null>(null)


   useEffect(()=>{
       const fetchArtDetails=async()=>{
           try{
               setIsLoading(true)
               const response=await fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
               const data = await response.json()
               setArt(data.data)
               console.log(data.data)
               setIsLoading(false)
           }
           catch(err){
               console.log(err)
           }
       }
       fetchArtDetails()
   },[])

    return (
        <>
        {
            !isLoading?
            art&&(
                <div className="art-detail">
                    <div className="art-detail__holder">
                        <div className="art-detail__image">
                            <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`} alt={art.title} />
                        </div>
                        <div className="art-detail__info info">
                            <p className="info__title">{art.title}</p>
                            <p className="info__artist">{art.artist_display}</p>
                            <p>dimensions: {art.dimensions}</p>
                            <p>inscriptions: {art.inscriptions}</p>
                            <p>place of origin: {art.place_of_origin}</p>
                        </div>
                    </div>
                    <div className="art-detail__history history">
                        {art.exhibition_history&&(
                            <> 
                            <p className="history__title">History:</p>
                            <p className="history__text">{art.exhibition_history}</p>
                        </>
                    )}   
                    </div>
                </div>
            )
            :<p>isLoading...</p>
        }
        </>
    )
}

export default Detail