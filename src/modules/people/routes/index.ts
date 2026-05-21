import type { RouteRecordRaw } from "vue-router";
import { ROUTES_NAMES } from "../../../shared/constants/routes/people.routes";

import PeopleListView from "../views/PeopleListView.vue";
import PersonDetailView from "../views/PersonDetailView.vue";

export const peopleRoutes: RouteRecordRaw[] = [
	{
		path: "/people",
		name: ROUTES_NAMES.PEOPLE_LIST,
		component: PeopleListView,
	},
	{
		path: "/people/:id",
		name: ROUTES_NAMES.PERSON_DETAIL,
		component: PersonDetailView,
		props: true,
	},
];
