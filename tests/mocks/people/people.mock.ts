import type { Person } from "@/modules/people/domain/models/person.model";
import type { PersonDTO } from "@/modules/people/infrastructure/dtos/person.dto";

export const peopleMock: Person[] = [
	{
		id: 1,
		name: "Luke Skywalker",
		birthYear: "19BBY",
		gender: "Masculino",
		films: [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/6",
		],
		species: [],
	},
];

export const personDTOMock: PersonDTO[] = [
	{
		name: "Luke Skywalker",
		height: "172",
		mass: "77",
		hair_color: "blond",
		skin_color: "fair",
		eye_color: "blue",
		birth_year: "19BBY",
		gender: "male",
		homeworld: "https://swapi.info/api/planets/1",
		films: [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/6",
		],
		species: [],
		vehicles: ["https://swapi.info/api/vehicles/14", "https://swapi.info/api/vehicles/30"],
		starships: ["https://swapi.info/api/starships/12", "https://swapi.info/api/starships/22"],
		created: "2014-12-09T13:50:51.644000Z",
		edited: "2014-12-20T21:17:56.891000Z",
		url: "https://swapi.info/api/people/1",
	},
	{
		name: "C-3PO",
		height: "167",
		mass: "75",
		hair_color: "n/a",
		skin_color: "gold",
		eye_color: "yellow",
		birth_year: "112BBY",
		gender: "unknown",
		homeworld: "https://swapi.info/api/planets/1",
		films: [
			"https://swapi.info/api/films/1",
			"https://swapi.info/api/films/2",
			"https://swapi.info/api/films/3",
			"https://swapi.info/api/films/4",
			"https://swapi.info/api/films/5",
			"https://swapi.info/api/films/6",
		],
		species: ["https://swapi.info/api/species/2"],
		vehicles: [],
		starships: [],
		created: "2014-12-10T15:10:51.357000Z",
		edited: "2014-12-20T21:17:50.309000Z",
		url: "https://swapi.info/api/people/2",
	},
];
