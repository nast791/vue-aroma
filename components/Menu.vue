<template>
	<div class="absolute content-[''] bg-slate-200 w-full z-0 max-h-[300px] overflow-hidden">
		<div class="container max-w-[1200px] py-10">
			<NuxtLink
				class="hover:text-active font-medium uppercase mr-40 sm:mr-20 last-of-type:mr-0 text-medium sm:text-base font-sans"
				:to="{name: item.route}"
				v-for="item in menu"
				:key="item.title"
			>
				{{item.title}}
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {Menu} from "~/models/menu";

	const menu = reactive<Menu[]>([
		{
			title: 'Бренды',
			route: 'index'
		},
		{
			title: 'Ноты',
			route: 'index'
		},
		{
			title: 'Страны',
			route: 'index'
		},
	]);
</script>

<style lang="scss" scoped>
	.router-link-active {
		color: #f43f5e;
	}
</style>
