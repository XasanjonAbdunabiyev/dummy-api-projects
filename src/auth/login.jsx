import React, { useRef } from "react";
import { Input, Button, Text } from "@nextui-org/react";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlash } from "react-icons/bs";
import { data } from "../data/data";
import "./login.scss";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const nav = useNavigate();
	const name = useRef("");
	const password = useRef("");
	function handleSubmit() {
		if (
			data.password === password.current.value &&
			data.login === name.current.value
		) {
			localStorage.setItem("token", true);
			nav("/products");
		}
	}

	return (
		<section className="login-banner">
			<div className="login_container">
				<Text
					b
					style={{
						color: "white",
						textTransform: "uppercase",
						fontSize: "25px",
						letterSpacing: "2px",
					}}
				>
					login
				</Text>

				<Input
					ref={name}
					style={{
						fontSize: "20px",
					}}
					initialValue="Your Name"
					width="100%"
				/>

				<Input.Password
					ref={password}
					width="100%"
					visibleIcon={<IoEyeSharp />}
					style={{
						fontSize: "20px",
					}}
					hiddenIcon={<BsEyeSlash fill="currentColor" />}
				/>

				<Button
					onClick={() => handleSubmit()}
					style={{
						fontSize: "20px",
					}}
				>
					Send
				</Button>
			</div>
		</section>
	);
};

export default Login;
