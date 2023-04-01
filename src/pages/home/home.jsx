import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<motion.h1
				style={{
					fontSize: "30px",
				}}
				animate={{ fontSize: 50, color: "red", y: 100 }}
				transition={{
					duration: 0.5,
				}}
			>
				Home Page
			</motion.h1>

			<motion.div
				animate={{
					opacity: 0.9,
					marginTop: 100,
				}}
				transition={{
					duration: 0.5,
				}}
			>
				<motion.h1
					style={{
						fontSize: "40px",
					}}
				>
					Dummy
					<b>JSON</b>
				</motion.h1>

				<p className="my-4">
					Get dummy/fake JSON data to use as placeholder in development or in
					prototype testing.
				</p>

				<p className="my-4">
					Javascript Axios Project to Make HTTP GET & POST Requests to
					JSONPlaceholder Fake REST API in HTML5 With DummyJSON, what you get is
					different types of REST Endpoints filled with JSON data which you can
					use in developing the frontend with your favorite framework and
					library without worrying about writing a backend.
				</p>

				<p>You can use examples below to check how DummyJSON works.</p>

				<motion.button
					className="hover:opacity-40 rounded"
					animate={{
						scale: 0.9,
						margin: "20px 0",
						background: "black",
						color: "#fff",
						padding: "8px 20px",
						fontSize: "16px",
						textTransform: "uppercase",
					}}
					transition={{
						duration: 0.6,
					}}
				>
					<Link target="_blank" to={"https://dummyjson.com/docs/todos"}>
						read docs
					</Link>
				</motion.button>
			</motion.div>
		</>
	);
};

export default Home;
