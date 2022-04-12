import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Importamos el contexto y arropamos dentro de este a los componentes que deseemos que puedan acceder a dicha información.
import ThemeProvider from "./context/ThemeProvider";

ReactDOM.render(
	<React.StrictMode>
		{/* Arropamos a toda la app para que el contexto sea global */}
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
