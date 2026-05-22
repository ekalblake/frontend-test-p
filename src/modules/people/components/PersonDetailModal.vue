<template>
	<v-dialog :model-value="modelValue" max-width="600" @update:model-value="$emit('update:modelValue', $event)">
		<v-card>
			<v-card-title> Detalle del Personaje </v-card-title>

			<v-card-text v-if="peopleStore.isPersonLoading"> Loading... </v-card-text>

			<v-card-text v-else-if="peopleStore.selectedPerson">
				<p>
					<strong>Name:</strong>
					{{ peopleStore.selectedPerson.name }}
				</p>

				<p>
					<strong>Gender:</strong>
					{{ peopleStore.selectedPerson.gender }}
				</p>

				<p class="mt-4">
					<strong>Films:</strong>
				</p>

				<ul>
					<li v-for="film in peopleStore.selectedPerson.films" :key="film">
						{{ film }}
					</li>
				</ul>

				<p class="mt-4">
					<strong>Species:</strong>
				</p>

				<ul v-if="peopleStore.selectedPerson.species.length">
					<li v-for="specie in peopleStore.selectedPerson.species" :key="specie">
						{{ specie }}
					</li>
				</ul>

				<p v-else>No species available</p>
			</v-card-text>

			<v-card-actions>
				<v-spacer />

				<v-btn variant="text" @click="$emit('update:modelValue', false)"> Close </v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
<script setup lang="ts">
import { usePeopleStore } from "../application/store/peopleStore";

defineProps<{
	modelValue: boolean;
}>();

defineEmits<{
	"update:modelValue": [value: boolean];
}>();

const peopleStore = usePeopleStore();
</script>
