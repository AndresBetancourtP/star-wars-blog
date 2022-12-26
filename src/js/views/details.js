import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Details = (props) => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        if (params.resource && params.uid) {
            actions.getDetails(params.resource, params.uid)
        }
        return () => {
            actions.removeCurrentItem();
        }
    }, [])
    return (
        <div className="container d-flex justify-content-center pt-5">
            {store.currentItem && (
                <React.Fragment>
                    <div className="card mb-3 border-0" style={{ maxWidth: "700px", maxHeight: "800px" }}>
                        <div className="row g-0 d-flex align-item-center" style={{ backgroundColor: "#0C0E14" }}>
                            <div className="col-md-6 align-self-center">
                                <img src={(params.resource === "planets" && params.uid === "1") ? "https://static.wikia.nocookie.net/theclonewiki/images/b/b4/Tatooine-TCW.png/" : `https://starwars-visualguide.com/assets/img/${params.resource === "people" ? "characters" : params.resource}/${params.uid}.jpg`} className="card-img-top" alt="..." />
                                
                                
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h1 className="card-title text-white"><strong>{store.currentItem.properties.name}</strong></h1>
                                    <p className="card-text fs-5 text-light pt-2">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row g-0 justify-content-around py-5" style={{ backgroundColor: "#0C0E14" }}>
                            {params.resource === "people" && (
                                <div className="d-flex justify-content-around text-center" style={{ color: "#db2818" }}>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Name:<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Birth Year:<br></br></strong>{store.currentItem.properties.birth_year}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Gender<br></br></strong>{store.currentItem.properties.gender}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Height<br></br></strong>{store.currentItem.properties.height}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Skin Color:<br></br></strong>{store.currentItem.properties.skin_color}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Eye Color:<br></br></strong>{store.currentItem.properties.eye_color}</div>
                                </div>
                            )}

                            {params.resource === "vehicles" && (
                                <div className="d-flex justify-content-around p-3 text-center" style={{ color: "#db2818" }}>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Name:<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Model:<br></br></strong>{store.currentItem.properties.model}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Passengers:<br></br></strong>{store.currentItem.properties.passengers}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Lenght:<br></br></strong>{store.currentItem.properties.length}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Cargo Capacity:<br></br></strong>{store.currentItem.properties.cargo_capacity}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Consumables:<br></br></strong>{store.currentItem.properties.consumables}</div>
                                </div>
                            )}

                            {params.resource === "planets" && (
                                <div className="d-flex justify-content-around p-3 text-center" style={{ color: "#db2818" }}>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Name:<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Climate:<br></br></strong>{store.currentItem.properties.climate}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Population:<br></br></strong>{store.currentItem.properties.population}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Orbital Period:<br></br></strong>{store.currentItem.properties.orbital_period}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Rotation Period:<br></br></strong>{store.currentItem.properties.rotation_period}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}><strong>Diameter:<br></br></strong>{store.currentItem.properties.diameter}</div>
                                </div>
                            )}
                            
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}