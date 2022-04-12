import React from "react";
import { useState } from "react/cjs/react.development";
import { DataContext } from "./context/CredentialsProvider";
import { ThemeContext } from "./context/ThemeProvider";

const Principal = () => {
	const { theme } = React.useContext(ThemeContext);
	const { globalData, changeName } = React.useContext(DataContext);

	const [isUpdatingValue, setIsUpdatingValue] = useState(false);
	const [newName, setNewName] = useState("");

	const toggleUpdateInput = () => {
		setIsUpdatingValue(!isUpdatingValue);
	};
	const handleChangeName = () => {
		changeName(newName);
		toggleUpdateInput();
	};

	return (
		<div
			style={{
				...theme,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				height: "15em",
				width: "100%",
			}}
		>
			<div>
				{isUpdatingValue ? (
					<>
						<form>
							<input
								type="text"
								value={newName}
								onChange={(e) => {
									setNewName(e.target.value);
								}}
							/>
							<button
								onClick={(e) => {
									e.preventDefault();
									handleChangeName();
								}}
							>
								Actualizar Nombre
							</button>
						</form>
					</>
				) : (
					<>
						<button
							onClick={() => {
								toggleUpdateInput();
							}}
						>
							Actualizar Nombre
						</button>
						<span>Nombre: {globalData.name}</span>
					</>
				)}
			</div>
			<div>
				<span>Rango: {globalData.range}</span>
			</div>
		</div>
	);
};

export default Principal;
