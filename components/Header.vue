<template>
	<header class="fixed bg-slate-200 w-full z-50" v-click-outside="closeMenu">
		<div class="flex justify-between items-center container max-w-[1200px] py-8 mx-auto">
			<NuxtLink :to="{name: 'index'}" class="flex items-center translate-x-[-5px]">
				<BaseIcon name="logo" class="logo w-40 h-24 translate-y-[-1px]"/>
				<h1 class="font-sans text-xl sm:text-lg text-gray-800 uppercase">Aromatica</h1>
			</NuxtLink>
			<div class="flex items-center justify-between ml-20">
				<NuxtLink :to="{name: 'create'}" v-if="isAdmin">
					<BaseIcon
						name="add"
						:class="[`add w-24 h-24 duration-300 translate-y-[2px] hover:opacity-60`,
						isMenuOpen && `active`]"
					/>
				</NuxtLink>
				<BaseCheckbox class="roles ml-10 sm:ml-0" v-model="isAdmin" type="switch">
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
		<Transition name="menu">
			<Menu v-show="isMenuOpen"/>
		</Transition>
	</header>
</template>

<script setup lang="ts">
	const isAdmin = ref<boolean>(false);
	const isMenuOpen = ref<boolean>(false);

	const toggleMenu = (): boolean => isMenuOpen.value = !isMenuOpen.value;
	const closeMenu = (): boolean => isMenuOpen.value = false;
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
				stroke: #f43f5e;
			}
		}
	}
	.roles {
		:deep(.trigger) {
			@media (max-width: 575px) {
				display: none;
			}
		}
	}
	.menu-enter-active,
	.menu-leave-active {
		transition: all 0.3s ease;
	}
	.menu-enter-from,
	.menu-leave-to {
		max-height: 0;
	}
</style>
