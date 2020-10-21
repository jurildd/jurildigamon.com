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
            v-show="showModal"
            @toggle-theme="toggleTheme()"
            @close="closeModalHandler"
        />
    </div>
</template>

<script>
    import tinykeys from 'tinykeys';

    export default {
        name: 'Default',

        data() {
            return {
                showModal: false,
                keyBindings: null
            };
        },

        mounted() {
            this.keyBindings = tinykeys(window, {
                '$mod+KeyK': this.showModalHandler,
                't': this.toggleTheme
            });
        },

        methods: {
            showModalHandler() {
                event.preventDefault();
                this.showModal = !this.showModal;
            },

            closeModalHandler() {
                this.showModal = false;
            },

            toggleTheme() {
                document.body.hasAttribute('data-theme') ? document.body.removeAttribute('data-theme') :
                document.body.setAttribute('data-theme', 'light');
            }
        }
    };
</script>

<style lang="scss">
	.page {
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
