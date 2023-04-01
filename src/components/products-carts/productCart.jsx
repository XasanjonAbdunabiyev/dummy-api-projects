import React, { useContext } from "react";
// custom hooks
import { useGetData } from "../../hooks/useGetData";
// for animation ( motion) => from  framer-motion
import { motion } from "framer-motion";
// next -> ui components
import { Card, Image, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
// loading components
import Loading from "../../components/loading/site-laoding";
// custom scss file location
import "./products.scss";
import { ShopingContaxt } from "../../context/shop/shoping";
// productCart components
const ProductCart = () => {
	// navigate with <Navigate/>
	const navigate = useNavigate();
	// global Data
	const products = useGetData(["products"], "/products");
	// fetch loading
	const { isLoading } = products;
	// addToCart function
	const { addToCart } = useContext(ShopingContaxt);
	return (
		<div className="my-4">
			<Button
				onClick={() => navigate("/search-params-product")}
				style={{
					backgroundColor: "blue",
				}}
			>
				Filterred Products
			</Button>

			<div className="main__product">
				{isLoading ? (
					<section className="main__laoding">
						<Loading />
					</section>
				) : (
					products?.data?.data?.products?.map((element, value) => {
						return (
							<motion.div
								initial={{ scale: 0 }}
								animate={{ rotate: 360, scale: 1 }}
								transition={{
									duration: 0.5,
								}}
								key={value}
							>
								<>
									<Card
										isHoverable
										isPressable
										variant="flat"
										css={{
											p: "$3",
											cursor: "pointer",
										}}
									>
										<Card.Header>
											<Image
												showSkeleton
												className="product_img"
												style={{
													width: "250px",
													height: "200px",
													objectFit: "cover",
													borderRadius: "10px",
												}}
												src={element?.thumbnail}
												alt=""
											/>
										</Card.Header>
										<Card.Body css={{ py: "$2" }}>
											<h3>{element?.title.toUpperCase()}</h3>
											<h3>
												{element?.price
													? element?.price.toLocaleString("uz-UZ", {
															currensy: "UZS",
													  })
													: null}
											</h3>
											<Button
												onClick={() => navigate(`/products/${element?.id}`)}
												css={{
													mt: "$10",
													backgroundColor: "Blue",
												}}
												style={{
													backgroundColor: "blue",
												}}
											>
												Details
											</Button>

											<Button
												style={{
													backgroundColor: "blue",
													margin: "10px 0",
												}}
												onClick={() => addToCart(element, element?.id)}
											>
												+ add to cart
											</Button>
										</Card.Body>
									</Card>
								</>
							</motion.div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default ProductCart;
