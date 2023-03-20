<template>
	<div></div>
</template>

<script setup lang="ts">
	const route = useRoute();
	const title = ref<string>(`Aromatica: ${route.params.id}`);
	useSeoMeta({title: title.value});
</script>

<style scoped>

</style>
