<template>
	<label class="flex items-center cursor-pointer">
		<input :value="modelValue" @input="updateInput" type="checkbox" class="hidden">
		<span>
			<slot name="prepend"/>
		</span>
		<div :class="[triggerClasses, modelValue && 'active']"/>
		<span>
			<slot/>
		</span>
	</label>
</template>

<script setup lang="ts">
	import {CheckboxTypes} from './enum';

	interface Props {
		modelValue: boolean,
		type: CheckboxTypes
	}

	const props = withDefaults(defineProps<Props>(), {
		modelValue: false,
		type: CheckboxTypes.SWITCH,
	});

	const emit = defineEmits<{
		(e: 'update:modelValue', value: boolean): void
	}>()

	const updateInput = (event: Event) => {
		emit('update:modelValue', (event.target as HTMLInputElement).checked);
	}

	// TODO:
	const triggerClasses = computed(() => {
		switch(props.type) {
			case 'switch':
				return `w-40 h-20 bg-gray-700 rounded-[34px] duration-300
				before:duration-300 before:content-[''] before:absolute before:w-20 before:h-20
				before:bg-gray-50 before:rounded-[34px] before:translate-x-[-1px]
				[&.active]:before:bg-rose-400 [&.active]:before:translate-x-[101%]`;
		}
	});
</script>

<style scoped>

</style>
