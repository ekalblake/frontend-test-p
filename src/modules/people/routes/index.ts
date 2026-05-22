import type { RouteRecordRaw } from "vue-router";
import { ROUTES_NAMES } from "../../../shared/constants/routes/people.routes";

import PeopleListView from "../views/PeopleListView.vue";

export const peopleRoutes: RouteRecordRaw[] = [
	{
		path: "/people",
		name: ROUTES_NAMES.PEOPLE_LIST,
		component: PeopleListView,
	},
];
