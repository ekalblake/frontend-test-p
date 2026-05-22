<template>
	<v-dialog
		:model-value="modelValue"
		max-width="1024"
		@update:model-value="$emit('update:modelValue', $event)"
		@after-leave="peopleStore.resetSelectedPerson"
	>
		<v-card min-height="300">
			<v-card-text class="justify-center align-center d-flex" v-if="peopleStore.isPersonLoading">
				<v-progress-circular indeterminate color="primary" />
			</v-card-text>
			<template v-if="peopleStore.selectedPerson">
				<v-img height="180" cover src="https://i.pinimg.com/736x/de/fa/dc/defadc1400875bad29f74179352c606c.jpg">
					<div class="pa-6">
						<h1 class="text-h4 font-weight-bold">
							{{ peopleStore.selectedPerson?.name }}
						</h1>
						<span class="text-subtitle-1">
							{{ peopleStore.selectedPerson.gender }}
						</span>
					</div>
				</v-img>
				<v-card-text>
					<v-row>
						<v-col md="6" cols="12">
							<strong>Películas:</strong>
							<ul>
								<li v-for="film in peopleStore.selectedPerson.films" :key="film">
									{{ film }}
								</li>
							</ul>
						</v-col>
						<v-col v-if="peopleStore.selectedPerson.species.length" md="6" cols="12">
							<strong>Especie:</strong>

							<ul>
								<li v-for="specie in peopleStore.selectedPerson.species" :key="specie">
									{{ specie }}
								</li>
							</ul>
						</v-col>
					</v-row>
				</v-card-text>
			</template>
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
