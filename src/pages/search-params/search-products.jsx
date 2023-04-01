import React, { useContext, useRef, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { Button, Image } from "@nextui-org/react";
import "./serarch-params.scss";
import Loading from "../../components/loading/site-laoding";
import { ShopingContaxt } from "../../context/shop/shoping";
const SearchProducts = () => {
	let [name, setName] = useState("automotive");
	const Filteredproducts = useGetData(
		["filteredProducts"],
		`/products/category/${name}`
	);

	const { isLoading } = Filteredproducts;
	//  add to Cart function

	const { addToCart } = useContext(ShopingContaxt);

	return (
		<>
			<select
				onChange={(e) => setName(e.target.value)}
				className="search-params-select"
			>
				<option value="skincare">skincare</option>
				<option value="smartphones">smartphones</option>
				<option value="laptops">laptops</option>
				<option value="groceries">groceries</option>
				<option value="furniture">furniture</option>
				<option value="home-decoration">home-decoration</option>
				<option value="tops">tops</option>
				<option value="womens-dresses">womens-dresses</option>
				<option value="womens-shoes">womens-shoes</option>
				<option value="mens-shirts">mens-shirts</option>
				<option value="mens-shoes">mens-shoes</option>
				<option value="mens-watches">mens-watches</option>
				<option value="womens-watches">womens-watches</option>
				<option value="womens-bags">womens-bags</option>
				<option value="womens-jewellery">womens-jewellery</option>
				<option value="sunglasses">sunglasses</option>
				<option value="automotive">automotive</option>
				<option value="motorcycle">motorcycle</option>
				<option value="lighting">lighting</option>
			</select>

			{isLoading ? (
				<section className="main__loading">
					<Loading />
				</section>
			) : (
				<div className="main__search__panel">
					{Filteredproducts?.data?.data?.products?.map((element, index) => {
						return (
							<div className="item__search" key={index}>
								<div className="item__search__img">
									<Image
										showSkeleton
										style={{
											borderRadius: "20px",
											textAlign: "left",
										}}
										width={"70%"}
										objectFit="cover"
										src={element?.images[0]}
										alt=""
									/>
								</div>
								<h1>{element?.title}</h1>
								<h3>{element?.category}</h3>
								<p>{element?.description}</p>
								<p>{element?.price}</p>

								<Button
									className="bg-blue-500 z-0"
									onClick={() => addToCart(element, element.id)}
								>
									+ add to cart
								</Button>
							</div>
						);
					})}

					{name !== "automotive" ? (
						<section className="main__loading">
							<Loading />
						</section>
					) : null}
				</div>
			)}
		</>
	);
};

export default SearchProducts;
