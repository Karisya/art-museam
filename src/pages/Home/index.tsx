import React, { useEffect, useState } from "react";
import Search from "../../components/Search";
import ArtList from "../../components/ArtList";

interface Artworks{
    id:number;
    image_id:string;
    title:string;
    artist:string
}

const Home:React.FC=()=>{


    const [searchQuary, setSearchQuary] = useState('')
    const [artworks, setArtworks]=useState<Artworks[]>([])
    const [isLoading, setIsLoading]=useState(false)

    useEffect(()=>{
    const fetchArts=async()=>{
        try{
            setIsLoading(true)
            const url=searchQuary
            ?`https://api.artic.edu/api/v1/artworks/search?q=${searchQuary}&limit=20`
            :'https://api.artic.edu/api/v1/artworks'

            const response=await fetch(url)
            const data = await response.json()
            setArtworks(data.data)
            console.log(data.data)
            setIsLoading(false)
        }
        catch(err){
            console.log(err)
        }
    }
    
    fetchArts()
},[searchQuary])



    return (
        <>
        <Search onSearch={setSearchQuary}/>
        {isLoading
        ?<div>Loading....</div>
        :(<ArtList artworks={artworks}/>)}
        </>
    )
}

export default Home