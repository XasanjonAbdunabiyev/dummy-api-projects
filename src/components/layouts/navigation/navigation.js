import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../side-bar/side-bar";
// Sidebar
const Navigation = () => {
	// menu bars items

	const collapseItems = [
		"Products",
		"Home",
		"Todos",
		"Posts",
		"Users",
		"Comments",
	];
	// navigate react-router

	const navigate = useNavigate();

	return (
		<Navbar isBordered variant="sticky">
			<Navbar.Brand>
				<Navbar.Toggle aria-label="toggle navigation" />
				<Text css={{ display: "flex" }} onClick={() => navigate("/")}>
					<div
						style={{
							cursor: "pointer",
							display: "flex",
							gap: "3px",
							alignItems: "center",
						}}
					>
						<h3>Dummy</h3> <h5>Json</h5>
					</div>
				</Text>
			</Navbar.Brand>

			<Navbar.Content>
				<Navbar.Item>
					<Button auto flat as={Link} href="/login">
						Login
					</Button>
				</Navbar.Item>

				<div>
					<Sidebar />
				</div>
			</Navbar.Content>

			<Navbar.Collapse>
				{collapseItems.map((item, index) => {
					return (
						<Navbar.CollapseItem key={item}>
							<Link
								color="inherit"
								css={{
									minWidth: "100%",
								}}
								href={item === "Home" ? "/" : item.toLowerCase()}
							>
								{item}
							</Link>
						</Navbar.CollapseItem>
					);
				})}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
