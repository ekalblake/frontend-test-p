import { createRouter, createWebHistory } from "vue-router";
import { peopleRoutes } from "../../modules/people/routes";

const routes = [...peopleRoutes];

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
