import React from "react";

export const Lights = () => {
	const [light, setLight] = React.useState("green");
	return (
		<div className="page">
			<div className="trafficlights ">
				<div
					onClick={() => {
						setLight("red");
					}}
					className={
						light == "red" ? "light red shadow1" : "light red"
					}></div>

				<div
					onClick={() => {
						setLight("yellow");
					}}
					className={
						light == "yellow"
							? "light yellow shadow1"
							: "light yellow"
					}></div>
				<div
					onClick={() => {
						setLight("green");
					}}
					className={
						light == "green" ? "light green shadow1" : "light green"
					}></div>
			</div>
		</div>
	);
};
