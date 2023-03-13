<template>
	<label class="block cursor-pointer">
		<input type="checkbox" class="hidden">
		<div/>
		<span>
			<slot/>
		</span>
	</label>
</template>

<script>
export default {
	name: "Checkbox"
}
</script>

<style scoped>

</style>
