import React from "react";

const Title = ({ text, uppercase = true }) => {
	return (
		<h1 style={{ fontSize: "4rem", margin: "2rem 6vw" }}>
			{text && uppercase ? text.toUpperCase() : text}
		</h1>
	);
};

export default Title;
