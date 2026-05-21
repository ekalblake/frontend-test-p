import axios from "axios";

export const httpClient = axios.create({
	baseURL: "https://swapi.info/api", // Se podria cambiar a constante o variable de entorno
	headers: {
		"Content-Type": "application/json",
	},
});
