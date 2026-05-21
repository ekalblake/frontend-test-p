import { createRouter, createWebHistory } from "vue-router";
import { peopleRoutes } from "../../modules/people/routes";

const routes = [
	{
		path: "/",
		redirect: "/people",
	},
	...peopleRoutes,
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
