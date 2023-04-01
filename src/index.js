import React from "react";
// ReactDom
import ReactDom from "react-dom/client";
//BrowserRouter
import { BrowserRouter } from "react-router-dom";
// App Main Components
import { App } from "./app";
// daynamic Tanstack query
import Tanstack from "./query/tanstack";
// shoping context
import Shoping from "./context/shop/shoping";
// SideBarProvider Componenst
// css file
import "./base/css/index.css";
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Tanstack>
				<Shoping>
					<App />
				</Shoping>
			</Tanstack>
		</BrowserRouter>
	</React.StrictMode>
);
