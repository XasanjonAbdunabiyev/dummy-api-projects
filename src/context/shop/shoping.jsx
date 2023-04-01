import React, { createContext, useState } from "react";
export const ShopingContaxt = createContext();

const Shoping = ({ children }) => {
	const [shoping, setShoping] = useState([]);

	function addToCart(product, id) {
		const newItem = { ...product, amount: 1 };
		const cartItem = shoping.find((item) => {
			return item.id === id;
		});
		if (cartItem) {
			const newCart = [...shoping].map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount + 1 };
				} else {
					return item;
				}
			});
			setShoping(newCart);
		} else {
			setShoping([...shoping, newItem]);
		}
	}

	function clearCart() {
		setShoping([]);
	}

	const removeFromCart = (id) => {
		const newCart = shoping.filter((item) => {
			return item.id !== id;
		});
		setShoping(newCart);
	};

	return (
		<ShopingContaxt.Provider
			value={{
				shoping,
				setShoping,
				clearCart,
				removeFromCart,
				addToCart,
			}}
		>
			{children}
		</ShopingContaxt.Provider>
	);
};

export default Shoping;
