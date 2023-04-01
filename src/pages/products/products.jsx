import React from "react";
import { Navigate } from "react-router-dom";
import ProductCart from "../../components/products-carts/productCart";

const Products = () => {
	if (!localStorage.getItem("token")) {
		return <Navigate to={"/login"} replace />;
	}
	return (
		<>
			<ProductCart />
		</>
	);
};

export default Products;
