import React from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeProvider";

function App() {
	const { theme, setTheme } = React.useContext(ThemeContext);

	const centeredItems = {
		display: "flex",
		justifyContent: "center",
		marginBottom: "2em",
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
							setTheme({ ...theme, background: e.target.value });
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
							setTheme({ ...theme, color: e.target.value });
						}}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
