import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { RootState } from "../../redux/store";
import { handleFavorite } from "../../redux/slices/favoritesSlice";
import './style.css'


const Favorites:React.FC=()=>{

    const dispatch=useDispatch()
    const favorites=useSelector((state: RootState)=>state.favorites.items)
    const favoriteIds = useSelector((state: RootState) =>
    state.favorites.items.map(item => item.id)
        );
    

    return (
        <div className="favorites">
        {favorites.length!==0
            ?(favorites.map((it)=>{
            const isFav = favoriteIds.includes(it.id);
            return(
                <div className="favorite-card card">
                    <div className="card__image">
                         <img src={`https://www.artic.edu/iiif/2/${it.image_id}/full/400,/0/default.jpg`} alt={it.title} />
                    </div>
                    <div className="card__info">
                        <div>
                            <p>{it.title}</p>
                            <p>{it.artist_title}</p>
                        </div>
                        <div className="art-favorites">
                            <img 
                            onClick={(e) => {
                            e.stopPropagation();
                            dispatch(handleFavorite(it));
                            }}
                            src={isFav?'star-full.svg':'star-empty.svg'}
                            alt="favorites" />
                </div>
                    </div>
                </div>
                    )
                }
            )):<p>список избранных пуст</p>}
        </div>
    )
}

export default Favorites