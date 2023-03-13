<template>
  <div v-html="svg"/>
</template>

<script setup lang="ts">
	import icons from 'assets/icons';

	interface Props {
		name: string
	}
	const props = withDefaults(defineProps<Props>(), {
		name: 'logo'
	});

	const iconsList: {[key: string]: string} = icons;

	const svg = computed<string>(() => iconsList[props.name]);
</script>

<style scoped>

</style>
