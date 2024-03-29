<template>
    <div class="page">
        <Navbar
            @btn-clicked="toggleModalHandler"
        />
        <main class="page__content-wrapper">
            <div class="page__container">
                <Nuxt />
                <transition name="fade">
                    <Hint
                        v-if="showHint && !isMobile"
                        @close="dismissHint"
                    />
                </transition>
            </div>
        </main>
        <transition name="fade">
            <SwitcherModal
                v-show="showModal"
                :toggled="showModal"
                @toggle-theme="toggleThemeHandler"
                @route="routeHandler"
                @close="closeModalHandler"
            />
        </transition>
    </div>
</template>

<script>
    import tinykeys from 'tinykeys';

    export default {
        name: 'Default',

        provide() {
            return {
                keyBinds: this.keyBinds
            };
        },

        data() {
            return {
                showModal: false,
                switcherKeyBind: null,
                keyBinds: null,
                showHint: true,
                theme: 'dark'
            };
        },

        eventBusCallbacks: {
            'toggle-key-binds': 'toggleKeyBinds'
        },

        computed: {
            isMobile() {
                if (process.client) {
                    return document.body.clientWidth < 600 ? true : false;
                }
                return '';
            }
        },

        mounted() {
            this.switcherKeyBind = tinykeys(window, {
                '$mod+KeyK': this.toggleModalHandler,
            });
            this.setKeyBinds();

            if (localStorage.getItem('show_hint')) {
                this.showHint = JSON.parse(localStorage.getItem('show_hint'));
            }

            if (localStorage.getItem('theme')) {
                this.theme = localStorage.getItem('theme');
                document.body.setAttribute('data-theme', this.theme);
            }
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
                this.theme == 'dark' ? this.theme = 'light' : this.theme = 'dark';
                document.body.setAttribute('data-theme', this.theme);
                localStorage.setItem('theme', this.theme);
            },

            routeHandler(route) {
                if (route === 'twitter') {
                    window.open('https://twitter.com/jdd__________?s=09', '_blank');
                }
                else if (route === 'github') {
                    window.open('https://github.com/jurildd', '_blank');
                }
                else if (route === 'linkedin') {
                    window.open('https://www.linkedin.com/in/juril-digamon-b15854194/', '_blank');
                }
                else {
                    this.$router.push({path: route});
                }
            },

            setKeyBinds() {
                if (typeof window !== 'undefined') {
                    this.keyBinds = tinykeys(window, {
                        't': this.toggleThemeHandler,
                        'z h': () => this.routeHandler('/'),
                        'z a': () => this.routeHandler('/about'),
                        'z c': () => this.routeHandler('/contact'),
                        'z p': () => this.routeHandler('/projects'),
                        'z r': () => this.routeHandler('/resume'),
                        'z w': () => this.routeHandler('twitter'),
                        'z g': () => this.routeHandler('github'),
                        'z l': () => this.routeHandler('linkedin'),
                    });

                }
            },

            removeKeyBinds() {
                this.keyBinds();
            },

            toggleKeyBinds(toggle) {
                if (toggle) {
                    this.removeKeyBinds();
                }
                else {
                    this.setKeyBinds();
                }
            },

            dismissHint() {
                this.showHint = false;
                localStorage.setItem('show_hint', this.showHint);
            }
        }
    };
</script>

<style lang="scss">
	.page {
		&__content-wrapper {
			margin: 0 auto;
			padding: var(--gap-bigger) 0;
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
