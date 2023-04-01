import React, { useContext } from "react";
// useParams useNavigate from react-router-dom
import { useNavigate, useParams } from "react-router-dom";
// custom hooks
import { useGetData } from "../../../hooks/useGetData";
// next ui components
import { Button, Image, Text } from "@nextui-org/react";
// loading components
import Loading from "../../../components/loading/site-laoding";
// custom scss file location
import "./details.scss";
// context shopping
import { ShopingContaxt } from "../../../context/shop/shoping";
// motion with anaite
import { motion } from "framer-motion";

const ProductDetails = () => {
	// product Id With Details
	const { productId } = useParams();
	// details Products data
	let detailsProduct = useGetData(["productDetails"], `/products/${productId}`);
	// fetch loading
	const { isLoading } = detailsProduct;
	// add to function
	const { addToCart } = useContext(ShopingContaxt);
	// navigate from "React-router-dom"

	const navigate = useNavigate();

	return (
		<div className="my-4">
			<Button
				onClick={() => navigate("/search-params-product")}
				className="bg-blue-700"
			>
				Filered Prodcuts
			</Button>
			{isLoading ? (
				<section className="main__laoding">
					<Loading />
				</section>
			) : (
				<>
					<div className="details__container">
						<div className="details__img">
							<Image
								showSkeleton
								src={detailsProduct?.data?.data?.thumbnail}
								width={"100%"}
								height={"100%"}
								objectFit="cover"
								alt="img"
							/>
						</div>

						<div className="details_content">
							<Text
								style={{
									fontSize: "30px",
								}}
							>
								{detailsProduct?.data?.data?.title}
							</Text>
							<Text
								style={{
									fontSize: "20px",
								}}
							>
								{detailsProduct?.data?.data?.description}
							</Text>

							<Text
								style={{
									fontSize: "20px",
								}}
							></Text>

							<Button
								style={{
									backgroundColor: "blue",
									margin: "10px 0",
								}}
								onClick={() =>
									addToCart(
										detailsProduct?.data?.data,
										detailsProduct?.data?.data?.id
									)
								}
							>
								+ add to cart
							</Button>
						</div>
					</div>
					<div className="main__img_details">
						{detailsProduct?.data?.data?.images?.map((img, index) => {
							return (
								<div key={index}>
									<motion.div
										animate={{
											x: 92,
											y: 28,
											margin: "0 10px",
										}}
									>
										<Image
											showSkeleton
											style={{ borderRadius: "10px" }}
											src={img}
											width={250}
											height={200}
											objectFit="cover"
											alt=""
										/>
									</motion.div>
								</div>
							);
						})}
					</div>
				</>
			)}

			<Button
				onClick={() => navigate(-1)}
				style={{
					margin: "10px",
					backgroundColor: "blue",
				}}
			>
				back
			</Button>
		</div>
	);
};

export default React.memo(ProductDetails);
