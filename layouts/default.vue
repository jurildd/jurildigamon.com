<template>
	<div class="app">
		<Nuxt />
	</div>
</template>

<style lang="scss">
	.app {
		--main-bg: var(--main-bg-dark);
		--nav: var(--nav-dark);
		--high-contrast: var(--high-contrast-dark);
		--medium-contrast: var(--medium-contrast-dark);
		--low-contrast: var(--low-contrast-dark);
		--switcher-header-bg: var(--switcher-header-bg-dark);
		--switcher-header: var(--switcher-header-dark);
		--switcher-divider: var(--switcher-divider-dark);
		--modal-overlay: var(--modal-overlay-dark);
		--elevation-high: var(--elevation-high-dark);
		background-color: var(--main-bg);
		color: var(--high-contrast);

		@media (prefers-color-scheme: light) {
			--main-bg: var(--main-bg-light);
			--nav: var(--nav-light);
			--high-contrast: var(--high-contrast-light);
			--medium-contrast: var(--medium-contrast-light);
			--low-contrast: var(--low-contrast-light);
			--switcher-header-bg: var(--switcher-header-bg-light);
			--switcher-header: var(--switcher-header-light);
			--switcher-divider: var(--switcher-divider-light);
			--modal-overlay: var(--modal-overlay-light);
			--elevation-high: var(--elevation-high-light);
			background-color: var(--main-bg);
			color: var(--high-contrast);
		}
	}
</style>
