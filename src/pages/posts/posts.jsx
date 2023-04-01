import React, { useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { Card, Input, Text } from "@nextui-org/react";
import "./posts.scss";
const Posts = () => {
	const posts = useGetData(["posts"], "/posts");
	const [search, setSearch] = useState("");

	return (
		<>
			<Text size={"$4xl"}>Posts</Text>
			<div className="input__posts">
				<Input
					onChange={(e) => setSearch(e.target.value)}
					clearable
					placeholder="Name"
					css={{
						margin: "15px 0",
						width: "100%",
						padding: "0 15px",
						color: "#000",
					}}
					type="text"
				/>
			</div>
			<div className="main__posts">
				{posts?.data?.data?.posts
					?.filter((element) => {
						if (search === "") {
							return element;
						} else if (element?.title.includes(search.toLowerCase())) {
							return element;
						}
					})
					.map((element, index) => {
						return (
							<Card
								isHoverable
								isPressable
								css={{ padding: "10px", cursor: "pointer" }}
								key={index}
							>
								<Text size={"$2xl"}>{element?.title}</Text>
								<Text css={{ margin: "10px 0" }}>{element?.body}</Text>
							</Card>
						);
					})}
			</div>
		</>
	);
};

export default Posts;
