import type { Person } from "../../domain/models/person.model";
import type { PersonDTO } from "../dtos/person.dto";

const genderMap: Record<string, string> = {
	male: "Masculino",
	female: "Femenino",
	hermaphrodite: "Hermafrodita",
	"n/a": "Desconocido",
};

export const mapPerson = (person: PersonDTO): Person => ({
	id: Number(person.url.split("/").pop()),
	name: person.name,
	birthYear: person.birth_year,
	gender: genderMap[person.gender] || "Desconocido",
	films: person.films,
	species: person.species,
});
