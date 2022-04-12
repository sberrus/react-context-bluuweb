import React from "react";
import "./App.css";
import { DataContext } from "./context/CredentialsProvider";
import { ThemeContext } from "./context/ThemeProvider";

function App() {
	const { theme, changeColor, changebackground } = React.useContext(ThemeContext);
	const { globalData } = React.useContext(DataContext);

	const centeredItems = {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	};

	const container = theme;

	return (
		<>
			<div style={container}>
				<div style={centeredItems}>
					<label htmlFor="">Color Fondo</label>
					<input
						type="color"
						id=""
						value={theme.background}
						onChange={(e) => {
							changebackground({ ...theme, background: e.target.value });
						}}
					/>
				</div>
				<div style={centeredItems}>
					<label htmlFor="">Color de Texto</label>
					<input
						type="color"
						id=""
						value={theme.color}
						onChange={(e) => {
							changeColor({ ...theme, color: e.target.value });
						}}
					/>
				</div>
				<div style={centeredItems}>
					<div>
						<span>Nombre: {globalData.name}</span>
					</div>
					<div>
						{" "}
						<span>Rango: {globalData.range}</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
