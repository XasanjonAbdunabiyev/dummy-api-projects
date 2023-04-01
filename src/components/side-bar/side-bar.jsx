import React, { useContext, useState } from "react";
import { FaShopify, FaTrash } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import "./side-bar.scss";
import { ShopingContaxt } from "../../context/shop/shoping";
import { Link } from "react-router-dom";
import { Button, Popover, Text } from "@nextui-org/react";

const Sidebar = () => {
	const [isOpen, setisOpen] = useState(true);
	const { shoping, clearCart, removeFromCart } = useContext(ShopingContaxt);
	return (
		<>
			<div className="shoping-icons">
				<FaShopify onClick={() => setisOpen(false)} />
			</div>
			<div className="shopping__container">
				<p>{shoping?.length}</p>
			</div>

			<div className={isOpen ? "main_sidebar" : "hidden_side_bar"}>
				<div className="close-side-bar">
					<IoMdArrowRoundForward onClick={() => setisOpen("hidden_side_bar")} />
				</div>

				<div className="side-bar-data">
					{shoping?.map((element, value) => {
						return (
							<>
								<div key={value} className="data_sidebar">
									<div className="side-data-img">
										<img src={element?.thumbnail} alt="" />
									</div>
									<div className="sidebar-data-content">
										<Text
											style={{
												margin: "10px 0",
											}}
										>
											{element?.title}
										</Text>
										<Text> Price : ${element?.price}</Text>
										<Text> Amount: {element?.amount}</Text>
										<Button
											style={{
												backgroundColor: "red",
												margin: "10px 0",
											}}
											onClick={() => removeFromCart(element?.id)}
										>
											remove
										</Button>
									</div>
								</div>
							</>
						);
					})}
				</div>

				<div className="flex flex-col gap-y-3 py-4 mt-4">
					<div className="flex items-center w-full justify-between">
						{/* clear cart */}
						<>
							<Popover>
								<Popover.Trigger>
									<Button
										onClick={clearCart}
										auto
										className="cursor-pointer text-white w-9 h-8 rounded-s flex justify-center items-center text-xl bg-red-500 py-4"
									>
										<FaTrash />
									</Button>
								</Popover.Trigger>
								<Popover.Content>
									<Text css={{ p: "$6" }}>remove all products</Text>
								</Popover.Content>
							</Popover>
						</>
					</div>
					<div className="flex flex-col">
						<Link
							to={"/"}
							onClick={() => setisOpen(!isOpen)}
							className="flex w-full p-3  uppercase  text-white justify-center
              items-center font-medium bg-gray-600"
						>
							view more
						</Link>
						<Link
							to={"/products"}
							onClick={() => setisOpen(!isOpen)}
							className="mt-3 flex w-full p-3 uppercase text-white justify-center
              items-center font-medium bg-gray-900"
						>
							checkout
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
