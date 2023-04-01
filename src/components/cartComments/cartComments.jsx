import React, { useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { Card, Text, Input, Grid, Avatar } from "@nextui-org/react";
// loading components
import Loading from "../loading/site-laoding";
// custom scss file location
import "./cartComments.scss";
import { motion } from "framer-motion";
const CartComments = () => {
	// search input with data filtered
	const [search, setSearch] = useState("");
	const comments = useGetData(["comments"], "/comments");
	const { isLoading } = comments;

	return (
		<>
			<div className="commments__input">
				<Input
					type="text"
					width="100%"
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search..."
				/>
			</div>
			{isLoading ? (
				<section className="main__laoding">
					<Loading />
				</section>
			) : (
				<Grid.Container gap={3} justify="flex-start">
					{comments?.data?.data?.comments
						?.filter((element) => {
							if (search === "") {
								return element;
							} else if (
								element?.user?.username?.includes(search.toLowerCase())
							) {
								return element;
							}
						})
						.map((element, value) => {
							return (
								<>
									<motion.div
										key={value}
										style={{
											width: "300px",
											margin: "10px",
										}}
										transition={{
											duration: 0.4,
											delay: value * 0.1,
										}}
										initial={{ opacity: 0, translateX: -50, translateY: -50 }}
										animate={{ opacity: 1, translateX: 0, translateY: -0 }}
									>
										<Card
											isPressable
											style={{
												margin: "10px",
											}}
											css={{ mw: "300px" }}
										>
											<Card.Body>
												<Avatar
													bordered
													style={{
														fontSize: "20px",
														margin: "20px 0",
														fontWeight: "bolder",
													}}
													text={element?.user?.username.toUpperCase()}
												/>
												<Text
													style={{
														fontWeight: "bold",
													}}
													size={"25px"}
												>
													{element?.user?.username.toUpperCase()}
												</Text>
												<Text
													style={{
														fontWeight: "bold",
														margin: "10px 0",
													}}
													size={"20px"}
												>
													{element?.body}
												</Text>
											</Card.Body>
										</Card>
									</motion.div>
								</>
							);
						})}
				</Grid.Container>
			)}
		</>
	);
};

export default CartComments;
