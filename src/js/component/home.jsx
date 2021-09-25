import React from "react";
import { Lights } from "./lights.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="">
			<Lights />
		</div>
	);
};

export default Home;
