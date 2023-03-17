<template>
  <div v-html="svg"/>
</template>

<script setup lang="ts">
	import icons from 'assets/icons';

	const props = withDefaults(defineProps<IconProps>(), {
		name: 'logo'
	});

	const iconsList: {[key: string]: string} = icons;

	const svg = computed((): string => iconsList[props.name]);
</script>

<script lang="ts">
interface IconProps {
	name: string
}
</script>

<style scoped></style>
