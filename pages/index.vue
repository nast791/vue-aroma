<template>
  <div>
		<h2 class="text-center font-medium text-xl">Энциклопедия ароматов</h2>
		<Novelties/>
  </div>
</template>

<script setup lang="ts">
	import Novelties from "~/components/Novelties.vue";

	const title = ref<string>('Aromatica');
	useSeoMeta({title: title.value});
</script>

<style scoped></style>
