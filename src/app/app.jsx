import React from "react";
// next ui Container
import { Container } from "@nextui-org/react";
// Route  and  Routes {React-router-dom}
import { Route, Routes } from "react-router-dom";
// with login
import { NotFound } from "../components/notFound";
import { ProtectedRoute } from "../routes/protected-route";
import { protecdetRoute } from "../routes/routes";
// components {  Login,  Layouts, Home, ProductDetails, Comments }
import Layouts from "../components/layouts/layouts";
import Login from "../auth/login";
import Home from "../pages/home/home";
import Comments from "../pages/comments/comments";
import ProductDetails from "../pages/products/details-products/productDetails";
// Main custom scss file location
import "../base/sass/main.module.scss";
import Todos from "../pages/todos/todos";
import SearchProducts from "../pages/search-params/search-products";
import Posts from "../pages/posts/posts";
const App = () => {
	return (
		<Layouts>
			<Container>
				<Routes>
					{/* NotFound page */}
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<Home />} />
					<Route path="/comments" element={<Comments />} />
					<Route path="/posts" element={<Posts />} />
					<Route path="/search-params-product" element={<SearchProducts />} />
					<Route path="/todos" element={<Todos />} />
					<Route path="/products/:productId" element={<ProductDetails />} />

					{/* protecdetRoute page with login */}
					{protecdetRoute?.map((element, index) => (
						<Route
							key={index}
							path={element.path}
							element={
								<>
									<ProtectedRoute>{element.element}</ProtectedRoute>
								</>
							}
						/>
					))}

					{/* protecdetRoute page with login */}
					<Route
						path={"/login"}
						element={
							<>
								<Login />
							</>
						}
					/>
				</Routes>
			</Container>
		</Layouts>
	);
};

export default App;
