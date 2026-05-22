import { defineStore } from "pinia";
import { ref } from "vue";

import type { Person } from "../../domain/models/person.model";

import { PeopleApiRepository } from "../../infrastructure/repositories/people-api.repository";

const repository = new PeopleApiRepository();

export const usePeopleStore = defineStore("starWars", () => {
	const people = ref<Person[]>([]);
	const selectedPerson = ref<Person | null>(null);

	const isPersonLoading = ref(false);

	const fetchPeople = async () => {
		try {
			isPersonLoading.value = true;

			people.value = await repository.getPeople();
		} finally {
			isPersonLoading.value = false;
		}
	};

	const fetchPersonById = async (id: number) => {
		try {
			isPersonLoading.value = true;

			selectedPerson.value = await repository.getPersonById(id);
		} finally {
			isPersonLoading.value = false;
		}
	};

	return {
		people,
		selectedPerson,
		isPersonLoading,

		fetchPeople,
		fetchPersonById,
	};
});
