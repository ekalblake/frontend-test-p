import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

export default defineConfig({
	plugins: [vue()],
	base: "/frontend-test-p/",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			tests: path.resolve(__dirname, "./tests"),
		},
	},
});
