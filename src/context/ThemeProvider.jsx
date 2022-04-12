import React from "react";
import { useState } from "react/cjs/react.development";

/**
 * El contexto es el objeto que contendrá la información para que pueda ser consumida por los
 * componentes hijos para que estos puedan acceder a la inforamción al mismo tiempo.
 *
 * Cabe destacar que el contexto solo puede compartir la información con loscomponentes
 * hijos del mismo contexto.
 */
export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
	const themes = { color: "#D10000", background: "#1d1d1d" };
	const [theme, setTheme] = useState(themes);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
