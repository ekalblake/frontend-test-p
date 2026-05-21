import type { Person } from "../../domain/models/person.model";
import type { PeopleRepository } from "../../domain/repositories/people.repository";
import { getPeopleAPI, getPersonByIdAPI } from "../api/people.api";
import { mapPerson } from "../mappers/person.mapper";

export class PeopleApiRepository implements PeopleRepository {
	async getPeople(): Promise<Person[]> {
		const people = await getPeopleAPI();

		return people.map((person) => mapPerson(person));
	}

	async getPersonById(id: number): Promise<Person> {
		const person = await getPersonByIdAPI(id);

		return mapPerson(person);
	}
}
