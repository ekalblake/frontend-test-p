<script setup lang="ts"></script>

<template>
	<v-app>
		<v-container>
			<RouterView :key="$route.fullPath"></RouterView>
		</v-container>
	</v-app>
</template>
