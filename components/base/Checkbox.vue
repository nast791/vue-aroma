<template>
	<label class="flex items-center cursor-pointer">
		<input :value="modelValue" @input="updateInput" type="checkbox" class="hidden">
		<span>
			<slot name="prepend"/>
		</span>
		<div :class="['trigger', triggerClasses, modelValue && 'active']"/>
		<span>
			<slot/>
		</span>
	</label>
</template>

<script setup lang="ts">
	const props = withDefaults(defineProps<CheckboxProps>(), {
		modelValue: false,
		type: 'switch',
	});

	const emit = defineEmits<CheckboxEmits>();

	const updateInput = (event: Event) => {
		emit('update:modelValue', (event.target as HTMLInputElement).checked);
	}

	const triggerClasses = computed(() :string => {
		switch(props.type) {
			case 'switch':
				return `w-40 h-20 bg-primary rounded-[34px] duration-300
				before:duration-300 before:content-[''] before:absolute before:w-20 before:h-20
				before:bg-gray-50 before:rounded-[34px] before:translate-x-[-1px]
				[&.active]:before:bg-rose-400 [&.active]:before:translate-x-[101%]`;
		}
	});
</script>

<script lang="ts">
interface CheckboxProps {
	modelValue: boolean,
	type: 'switch',
}
interface CheckboxEmits {
	(e: 'update:modelValue', v: boolean): void,
}
</script>

<style scoped></style>
