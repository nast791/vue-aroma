	<template>
	<div class="fixed bg-slate-200 w-full z-50">
		<div class="flex justify-between items-center w-full max-w-[1230px] px-15 py-8 mx-auto">
			<NuxtLink :to="{name: 'index'}" class="flex items-center translate-x-[-5px]">
				<BaseIcon name="logo" class="logo w-40 h-24 translate-y-[-1px]"/>
				<div class="font-sans text-xl sm:text-lg text-gray-800 uppercase">Aromatica</div>
			</NuxtLink>
			<div class="flex items-center justify-between ml-20">
				<BaseIcon
					name="add"
					:class="[`add w-24 h-24 mr-10 cursor-pointer duration-300 translate-y-[2px] hover:opacity-60`,
					isMenuOpen && `active`]"
					@click.stop="toggleModal"
					v-if="isAdmin"
				/>
				<BaseCheckbox v-model="isAdmin" type="switch">
					<BaseIcon
						name="pencil"
						:class="[`pencil w-24 h-24 ml-5 duration-300 opacity-20 [&.active]:opacity-100`, isAdmin && `active`]"
					/>
				</BaseCheckbox>
				<BaseIcon
					name="burger"
					:class="[`burger w-24 h-24 ml-10 cursor-pointer duration-300`, isMenuOpen && `active`]"
					@click.stop="toggleMenu"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const isAdmin = ref<boolean>(false);
	const isMenuOpen = ref<boolean>(false);
	const isModalShow = ref<boolean>(false);
	// TODO:
	const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
	const toggleModal = () => isModalShow.value = !isModalShow.value;
</script>

<style lang="scss" scoped>
	.logo {
		:deep(svg) {
			fill: #374151;
		}
	}
	.burger {
		&.active, &:hover {
			:deep(svg) {
				stroke: #fb7185;
			}
		}
	}
</style>
