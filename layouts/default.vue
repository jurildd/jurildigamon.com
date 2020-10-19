<template>
    <div class="page">
        <Navbar
            @btn-clicked="showModalHandler"
        />
        <main class="page__content-wrapper">
            <div class="page__container">
                <Nuxt />
            </div>
        </main>
        <SwitcherModal
            v-if="showModal"
            @close="closeModalHandler"
        />
    </div>
</template>

<script>
    export default {
        name: 'Default',

        data() {
            return {
                showModal: false
            };
        },

        methods: {
            showModalHandler() {
                if(this.showModal) {
                    this.showModal = false;
                }
                else {
                    this.showModal = true;
                }
            },

            closeModalHandler() {
                this.showModal = false;
            }
        }
    };
</script>

<style lang="scss">
	.page {
		--main-bg: var(--main-bg-dark);
		--nav: var(--nav-dark);
		--high-contrast: var(--high-contrast-dark);
		--medium-contrast: var(--medium-contrast-dark);
        --low-contrast: var(--low-contrast-dark);
        --switcher-bg: var(--switcher-bg-dark);
		--switcher-header-bg: var(--switcher-header-bg-dark);
		--switcher-header: var(--switcher-header-dark);
		--switcher-divider: var(--switcher-divider-dark);
		--modal-overlay: var(--modal-overlay-dark);
		--elevation-high: var(--elevation-high-dark);
		background-color: var(--main-bg);
		color: var(--high-contrast);
		min-height: 100vh;
		height: 100%;

		@media (prefers-color-scheme: light) {
			--main-bg: var(--main-bg-light);
			--nav: var(--nav-light);
			--high-contrast: var(--high-contrast-light);
			--medium-contrast: var(--medium-contrast-light);
            --low-contrast: var(--low-contrast-light);
            --switcher-bg: var(--switcher-bg-light);
			--switcher-header-bg: var(--switcher-header-bg-light);
			--switcher-header: var(--switcher-header-light);
			--switcher-divider: var(--switcher-divider-light);
			--modal-overlay: var(--modal-overlay-light);
			--elevation-high: var(--elevation-high-light);
		}

		&__content-wrapper {
			margin: 0 auto;
			padding-top: var(--gap-bigger);
			max-width: var(--body-content);
		}

		&__container {
			margin: 0 var(--gap);
		}
	}
</style>
