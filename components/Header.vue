	<template>
	<div class="fixed bg-slate-400 w-full z-50">
		<div class="flex justify-between items-center w-full max-w-[1230px] px-15 py-8 mx-auto">
			<NuxtLink :to="{name: 'index'}" class="flex items-center">
				<BaseIcon name="logo" class="logo w-40 h-24 translate-y-[-1px]"/>
				<div class="font-sans text-xl sm:text-lg text-gray-800 uppercase">Aromatica</div>
			</NuxtLink>
			<div class="flex items-center justify-between ml-20">
				<BaseButton>
					Сейчас: Пользователь
				</BaseButton>
				<div class="ml-10">Меню</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header"
}
</script>

<style lang="scss" scoped>
	.logo {
		:deep {
			svg {
				fill: #374151;
			}
		}
	}
</style>
