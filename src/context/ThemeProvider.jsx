import React, { useEffect, useState } from "react";

/**
 * El contexto es el objeto que contendrá la información para que pueda ser consumida por los
 * componentes hijos para que estos puedan acceder a la inforamción al mismo tiempo.
 *
 * Cabe destacar que el contexto solo puede compartir la información con loscomponentes
 * hijos del mismo contexto.
 */
export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
	//Inicializamos el theme con un objeto predeterminado para evitar errores con los componentes controlados.
	const [theme, setTheme] = useState({ color: "#D10000", background: "#1d1d1d" });

	//usamos el Effect para capturar, si lo hay, el tema que ya se haya definido manualmente en otra sesión.
	useEffect(() => {
		JSON.parse(localStorage.getItem("theme")) && setTheme(JSON.parse(localStorage.getItem("theme")));
		return () => {};
	}, []);

	// Si modificamos los valores del contexto de esta manera podemos manejar de manera más controlada el cambio de
	// estados del contexto
	const changeColor = (value) => {
		setTheme(value);
		localStorage.setItem("theme", JSON.stringify(value));
	};
	const changebackground = (value) => {
		setTheme(value);
		localStorage.setItem("theme", JSON.stringify(value));
	};

	return <ThemeContext.Provider value={{ theme, changeColor, changebackground }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
