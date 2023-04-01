import React from "react";
// custom hooks
import { useGetData } from "../../hooks/useGetData";
import { Card, Grid, Row, Text } from "@nextui-org/react";
// loading components
import Loading from "../loading/site-laoding";
// custom scss file location
import "../../base/sass__components/__users.scss";
// UsersCart components
const UsersCart = () => {
	const usersData = useGetData(["users"], "/users");
	// fetch loading
	const { isLoading } = usersData;
	return (
		<>
			{isLoading ? (
				<section className="main__laoding">
					<Loading />
				</section>
			) : (
				<Grid.Container gap={2} justify="flex-start">
					{usersData?.data?.data?.users?.map((element, index) => {
						return (
							<>
								<Card
									style={{
										margin: "10px",
										width: "200px",
										display: "inline-block",
									}}
									isPressable
								>
									<Card.Body css={{ p: 0 }}>
										<Card.Image
											showSkeleton
											src={element?.image}
											objectFit="cover"
											width="100%"
											height={"150px"}
											alt={element.title}
										/>
									</Card.Body>
									<Card.Footer>
										<Row
											css={{
												display: "block",
												lineHeight: "25px",
											}}
										>
											<Text
												css={{
													color: "$accents7",
													fontWeight: "$semibold",
													fontSize: "$sm",
												}}
											>
												Name: {element.firstName.toUpperCase()}
											</Text>

											<Text b> LastName : {element?.lastName}</Text>

											<Text
												b
												css={{
													display: "block",
												}}
											>
												Age : {element?.age}
											</Text>

											<Text b>
												MaidenName:
												{element?.maidenName}
											</Text>
										</Row>
									</Card.Footer>
								</Card>
							</>
						);
					})}
				</Grid.Container>
			)}
		</>
	);
};

export default UsersCart;
