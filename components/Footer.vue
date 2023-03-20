<template>
	<footer class="relative z-1 before:absolute before:content-[''] before:h-1 before:w-full before:bg-gray-300 top-15">
		<NuxtLink :to="{name: 'index'}" class="absolute content-[''] w-48 h-30 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center items-center z-2 bg-white">
			<BaseIcon name="logo" class="logo w-30 h-20"/>
		</NuxtLink>
		<div class="flex justify-between items-center container max-w-[1200px] pt-30 pb-15 mx-auto">
			<div class="text-sm">
				© {{new Date().getFullYear()}} | Aromatica
			</div>
			<a href="https://github.com/nast791/vue-aroma" target="_blank">
				<BaseIcon name="github" class="github"/>
			</a>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style lang="scss" scoped>
.logo {
	:deep(svg) {
		fill: #374151;
	}
}
</style>
