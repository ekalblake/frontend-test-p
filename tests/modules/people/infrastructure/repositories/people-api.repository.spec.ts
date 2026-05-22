import { describe, expect, it, vi } from "vitest";

import { PeopleApiRepository } from "@/modules/people/infrastructure/repositories/people-api.repository";
import { getPeopleAPI, getPersonByIdAPI } from "@/modules/people/infrastructure/api/people.api";
import { personDTOMock } from "tests/mocks/people/people.mock";

vi.mock("@/modules/people/infrastructure/api/people.api", () => ({
	getPeopleAPI: vi.fn(),
	getPersonByIdAPI: vi.fn(),
}));

describe("PeopleApiRepository", () => {
	const repository = new PeopleApiRepository();

	it("should get people mapped to domain model", async () => {
		vi.mocked(getPeopleAPI).mockResolvedValue(personDTOMock);

		const result = await repository.getPeople();

		expect(result[0].name).toBe("Luke Skywalker");
		expect(result[0].gender).toBe("Masculino");
	});

	it("should get person by id", async () => {
		vi.mocked(getPersonByIdAPI).mockResolvedValue(personDTOMock[0]);

		const result = await repository.getPersonById(1);

		expect(result.id).toBe(1);
		expect(result.gender).toBe("Masculino");
	});

	it("should get person by id and unknown gender", async () => {
		vi.mocked(getPersonByIdAPI).mockResolvedValue(personDTOMock[1]);

		const result = await repository.getPersonById(2);

		expect(result.id).toBe(2);
		expect(result.gender).toBe("Desconocido");
	});
});
