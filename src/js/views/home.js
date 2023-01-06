import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const Home = () => (
	<div>
		<h1>Characters</h1>
		<div className="card-container">
			<div className="card-title">
				<h4>Luke Skywalker</h4>
			</div>
			<div className="card-image">
				<img src="https://plus.unsplash.com/premium_photo-1661503325300-1d6289b4f53e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
			</div>
			<div className="card-description">
				<p>This is practice for the actual project</p>
			</div>
		</div>
	</div>
);

