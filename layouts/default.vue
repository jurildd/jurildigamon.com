<template>
    <div class="page">
        <Navbar
            @btn-clicked="toggleModalHandler"
        />
        <main class="page__content-wrapper">
            <div class="page__container">
                <Nuxt />
                <Footer />
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
                't': this.toggleThemeHandler,
                'z h': () => this.routeHandler(''),
                'z a': () => this.routeHandler('about'),
                'z c': () => this.routeHandler('contact'),
                'z p': () => this.routeHandler('projects'),
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
                console.log('here');
                document.body.hasAttribute('data-theme') ? document.body.removeAttribute('data-theme') :
                document.body.setAttribute('data-theme', 'light');
            },

            routeHandler(route) {
                console.log('dsadas');
                this.$router.push({path: `/${route}`});
                if(this.showModal) {
                    this.showModal = false;
                }
            },
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
        transition: opacity var(--transition-slow);
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
