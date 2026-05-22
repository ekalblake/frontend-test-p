<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12">
				<h1>Lista de personajes</h1>
			</v-col>
		</v-row>
		<v-row>
			<v-data-table
				:headers="PEOPLE_TABLE_HEADERS"
				:items="peopleStore.people"
				:loading="peopleStore.isPersonLoading"
			>
				<template #item.actions="{ item }">
					<v-btn color="primary" variant="text" @click="handleViewDetail(item.id)"> Detalle </v-btn>
				</template>
			</v-data-table>
		</v-row>
	</v-container>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";

import { usePeopleStore } from "../application/store/peopleStore";

import { PEOPLE_TABLE_HEADERS } from "../constants/people-table.constants";

const peopleStore = usePeopleStore();

const handleViewDetail = (id: number) => {
	//TODO: Open Modal
};

onMounted(async () => {
	await peopleStore.fetchPeople();
});
</script>
<style scoped></style>
