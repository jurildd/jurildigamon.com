<template>
    <div class="page">
        <Navbar
            @btn-clicked="toggleModalHandler"
        />
        <main class="page__content-wrapper">
            <div class="page__container">
                <Nuxt />
            </div>
        </main>
        <transition name="fade">
            <SwitcherModal
                v-show="showModal"
                :toggled="showModal"
                @toggle-theme="toggleThemeHandler"
                @close="closeModalHandler"
            />
        </transition>
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
                '$mod+KeyK': this.toggleModalHandler,
                't': this.toggleThemeHandler
            });
        },

        methods: {
            toggleModalHandler() {
                event.preventDefault();
                this.showModal = !this.showModal;
            },

            closeModalHandler() {
                this.showModal = false;
            },

            toggleThemeHandler() {
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

    // Fade transition
    .fade-enter-active, .fade-leave-active {
        transition: opacity var(--transition-default);
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
