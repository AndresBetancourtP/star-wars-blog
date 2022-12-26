import PropTypes from "prop-types";
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Card = ({ item, resource }) => {
    const { store, actions } = useContext(Context);
    
    
    const [ like, setLike ] = useState (false);
    const handleClick = () =>{
        setLike(!like)
    }

    useEffect(()=>{
        if(like) {
            actions.getFavorites (resource, item.uid)
        }
    },[like])

    return (
        <div className="card my-5 mx-3 border-0 rounded-5" style={{ minWidth: "18rem" }} >

            <img src={(resource === "planets" && item.uid === "1") ? "https://static.wikia.nocookie.net/theclonewiki/images/b/b4/Tatooine-TCW.png/" : `https://starwars-visualguide.com/assets/img/${resource === "people" ? "characters" : resource}/${item.uid}.jpg`} className="card-img-top" alt="..." />

            <div className="card-body bg-dark"> 
                <h3 className="card-title font-weight-bold text-white py-2">{item.name}</h3>
                <div className="d-flex contanier justify-content-between">
                    <Link to={`/${resource}/${item.uid}`} className="btn btn-outline-primary">
                    <i className="fas fa-solid fa-arrow-right p-1"></i><strong> Learn more </strong>
                    </Link>
                    <button
                        type="button"
                        
                        onClick={
                            handleClick
                        }
                           
                        
                        className={"btn btn-outline-warning" + (like ? "btn btn-warning" : "btn btn-outline-warning" )}>
                        <i className="fas fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div >
    )
}

Card.propTypes = {
    item: PropTypes.object,
    resource: PropTypes.string,
};


//{"btn btn-outline-warning" + (selectedColor === "btn-outline-warning" ? " btn-fav-clicked" : "")}
// Tatooine photo changed manually bc does not work on the API
// <img src={(resource === "planets" && item.uid === "1") ? "https://static.wikia.nocookie.net/theclonewiki/images/b/b4/Tatooine-TCW.png/" : `https://starwars-visualguide.com/assets/img/${resource === "people" ? "characters" : resource}/${item.uid}.jpg`} className="card-img-top" alt="..." />
