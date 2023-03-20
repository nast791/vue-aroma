<template>
  <div class="flex flex-col min-h-[calc(100vh-15px)]">
    <Header/>
		<main class="pt-[120px] sm:pt-[100px]">
			<div class="container max-w-[1200px] pb-15 mx-auto">
				<slot />
			</div>
		</main>
		<Footer class="mt-auto"/>
  </div>
</template>

<script>
export default {
  name: "default",
}
</script>

<style scoped></style>
