<template>
    <div class="page">
        <Navbar
            @btn-clicked="toggleModalHandler"
        />
        <main class="page__content-wrapper">
            <div class="page__container">
                <Nuxt />
                <footer class="page__footer">
                    <div class="page__footer-container">
                        <p class="t-body-sm">
                            Click the ⌘ icon or use the keyboard shortcut ⌘ (ctrl) + K to navigate through the site.
                        </p>
                        <Button class="small t-body-sm">
                            Got it
                        </Button>
                    </div>
                </footer>
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
                'z h': this.homeRouteHandler,
                'z a': this.aboutRouteHandler,
                'z c': this.contactRouteHandler,
                'z p': this.projectsRouteHandler,
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
            },

            homeRouteHandler() {
                this.$router.push({path: '/'});
            },

            aboutRouteHandler() {
                this.$router.push({path: '/about'});
            },

            contactRouteHandler() {
                this.$router.push({path: '/contact'});
            },

            projectsRouteHandler() {
                this.$router.push({path: '/projects'});
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

        &__footer {
            position: fixed;
            bottom: 0;
            margin-bottom: var(--gap-big);
            max-width: 712px;
            width: 100%;
        }

        &__footer-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 6px var(--gap-small);
            width: 100%;
            background-color: var(--footer-bg);
            backdrop-filter: blur(12px);
            border-radius: var(--radius-icon);
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
