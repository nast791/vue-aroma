import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.directive('click-outside', {
		mounted(el, binding) {
			el.clickOutsideEvent = function (event: Event) :void {
				if (!(el === event.target || el.contains(event.target))) binding.value();
			}
			document.body.addEventListener('click', el.clickOutsideEvent);
		},
		unmounted(el) {
			document.body.removeEventListener('click', el.clickOutsideEvent);
		}
	});
})
