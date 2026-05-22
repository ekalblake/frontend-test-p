<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12">
				<h1>Lista de personajes</h1>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-data-table
					:headers="PEOPLE_TABLE_HEADERS"
					:items="peopleStore.people"
					:loading="peopleStore.isPersonLoading"
				>
					<template #item.actions="{ item }">
						<v-btn color="primary" variant="text" @click="handleViewDetail(item.id)"> Detalle </v-btn>
					</template>
				</v-data-table>
			</v-col>
		</v-row>
	</v-container>
	<PersonDetailModal v-model="isDetailModalOpen" />
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

import { usePeopleStore } from "../application/store/peopleStore";

import { PEOPLE_TABLE_HEADERS } from "../constants/people-table.constants";

import PersonDetailModal from "../components/PersonDetailModal.vue";

const peopleStore = usePeopleStore();

const isDetailModalOpen = ref(false);

const handleViewDetail = async (id: number) => {
	isDetailModalOpen.value = true;
	await peopleStore.fetchPersonById(id);
};

onMounted(async () => {
	await peopleStore.fetchPeople();
});
</script>
<style scoped></style>
