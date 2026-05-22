import { describe, expect, it } from "vitest";

import { mapPerson } from "@/modules/people/infrastructure/mappers/person.mapper";

import { peopleMock, personDTOMock } from "tests/mocks/people/people.mock";

describe("mapPerson", () => {
	it("should map a personDTO to a domain model", () => {
		const result = mapPerson(personDTOMock[0]);

		expect(result).toEqual(peopleMock[0]);
	});
});
