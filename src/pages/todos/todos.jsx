import React, { useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import Loading from "../../components/loading/site-laoding";
import { motion } from "framer-motion";
import { Card, Input } from "@nextui-org/react";
import "./todos.scss";
const Todos = () => {
	const todos = useGetData(["todos"], "/todos");
	let allTodos = todos?.data?.data?.todos?.filter((element) => {
		return element.completed === false;
	});

	const [search, setSearch] = useState("");

	const { isLoading } = todos;
	return (
		<div className="todos__container">
			<Input
				type="text"
				width="100%"
				style={{
					display: "block",
					margin: "10px",
				}}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search..."
			/>
			{isLoading ? (
				<section className="main__laoding">
					<Loading />
				</section>
			) : (
				<div className="main__todos_insede">
					{allTodos
						?.filter((element) => {
							if (search === "") {
								return element;
							} else if (element?.todo?.includes(search.toLowerCase())) {
								return element;
							}
						})
						.map((element, index) => {
							return (
								<>
									<motion.div
										style={{
											width: "300px",
											margin: "10px",
										}}
										transition={{
											duration: 0.4,
											delay: index * 0.1,
										}}
										initial={{ opacity: 0, translateX: -50, translateY: -50 }}
										animate={{ opacity: 1, translateX: 0, translateY: -0 }}
										key={index}
									>
										<div>
											<Card
												isPressable
												isHoverable
												variant="bordered"
												css={{ mw: "400px" }}
											>
												<Card.Body>
													<p>{element?.todo}</p>
												</Card.Body>
											</Card>
										</div>
									</motion.div>
								</>
							);
						})}
				</div>
			)}
		</div>
	);
};

export default React.memo(Todos);
