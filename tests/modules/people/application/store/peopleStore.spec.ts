import { describe, expect, it } from "vitest";

import { usePeopleStore } from "@/modules/people/application/store/peopleStore";

describe("usePeopleStore", () => {
	it("should expose the people store definition", () => {
		expect(usePeopleStore.$id).toBe("starWars");
	});
});
