import React, { useState } from "react";

export const DataContext = React.createContext();

const CredentialsProvider = ({ children }) => {
	const [globalData, setGlobalData] = useState({ name: "samuel", range: "desarrollador fullstack" });

	/**
	 *
	 * @param {String} value Nuevo nombre que se desea usar.
	 */
	const changeName = (value) => {
		setGlobalData({ ...globalData, name: value });
	};

	/**
	 *
	 * @param {String} value Nuevo puesto que se desea usar.
	 */
	const changeRange = (value) => {
		setGlobalData({ ...globalData, range: value });
	};

	return <DataContext.Provider value={{ globalData, changeName, changeRange }}>{children}</DataContext.Provider>;
};

export default CredentialsProvider;
