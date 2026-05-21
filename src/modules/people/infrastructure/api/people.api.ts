import { httpClient } from "../../../../shared/api/http-client";

import type { PersonDTO } from "../dtos/person.dto";

export const getPeopleAPI = async (): Promise<PersonDTO[]> => {
	const response = await httpClient.get<PersonDTO[]>("/people");

	return response.data;
};

export const getPersonByIdAPI = async (id: number): Promise<PersonDTO> => {
	const response = await httpClient.get<PersonDTO>(`/people/${id}`);

	return response.data;
};
