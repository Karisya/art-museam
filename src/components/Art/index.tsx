import React, { useState } from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleFavorite } from "../../redux/slices/favoritesSlice";
import { RootState } from "../../redux/store";
import { isFavorite } from "../../redux/slices/favoritesSlice";

interface Art{
    id:number;
    title:string;
    image_id:string;
    artist_title:string;
}


const Art:React.FC<Art>=({id,title,image_id,artist_title})=>{

    const dispatch=useDispatch()
    const navigate = useNavigate()
    const isFavorites:boolean=useSelector((state:RootState)=>
        isFavorite(state, id)
    )

    const handleNavigate=()=>{
        navigate(`/detail/${id}`)
    }

    const addToFavorites=(e: React.MouseEvent)=>{
        e.stopPropagation();
        dispatch(handleFavorite({id,title,image_id,artist_title}))
    }

    return(
        <div className="art" onClick={handleNavigate}>
            <div className="art__image">
                <img src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`} alt={title} />
            </div>
            <div className="art__details">
                <div className="art__info">
                    <p>{title}</p>
                    <p>{artist_title}</p>
                </div>
                <div className="art-favorites" onClick={addToFavorites}>
                    <img 
                    src={isFavorites?'star-full.svg':'star-empty.svg'}
                     alt="favorites" />
                </div>
            </div>
        </div>
    )
}

export default Art