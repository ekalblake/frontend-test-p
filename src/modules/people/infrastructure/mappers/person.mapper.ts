import type { Person } from "../../domain/models/person.model";
import type { PersonDTO } from "../dtos/person.dto";

export const mapPerson = (person: PersonDTO): Person => ({
	id: person.url,
	name: person.name,
	birthYear: person.birth_year,
	gender: person.gender,
	films: person.films,
	species: person.species,
});
