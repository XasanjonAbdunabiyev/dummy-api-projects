import React from "react";
import Navigation from "./navigation/navigation";

const Layouts = ({ children }) => {
	return (
		<>
			<Navigation />
			{children}
		</>
	);
};

export default Layouts;
