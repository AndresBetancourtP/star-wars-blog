import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Navbar } from "../component/navbar";
import { Title } from "../component/title";
import { Context } from "../store/appContext";

export const Home = () => {

	const context = useContext(Context);
	return (
		<div className="mt-5 mx-5">
			<div className="d-flex flex-column">
				<Title text="Characters"></Title>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{context.store.people.map((character, index) => {
						return <Card key={character.uid} item={character} resource={"people"} />
					})}
				</div>
			</div>
			<div className="d-flex flex-column mt-5">
				<Title text="Vehicles"></Title>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{context.store.vehicles.map((vehicle, index) => {
						return <Card key={vehicle.uid} item={vehicle} resource={"vehicles"} />
					})}
				</div>
			</div>
			<div className="d-flex flex-column mt-5 mb-5">
				<Title text="Planets"></Title>
				<div className="d-flex flex-row flex-nowrap overflow-auto" style={{marginBottom:"120px"}}>
					{context.store.planets.map((planet, index) => {
						return <Card key={planet.uid} item={planet} resource={"planets"} />
						
					})}
				</div>
			</div>
		</div>
	);
}