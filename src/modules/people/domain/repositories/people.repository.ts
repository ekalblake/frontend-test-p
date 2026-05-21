import type { Person } from "../models/person.model";

export interface PeopleRepository {
	getPeople(): Promise<Person[]>;
	getPersonById(id: number): Promise<Person>;
}
