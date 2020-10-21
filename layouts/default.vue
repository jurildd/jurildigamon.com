<template>
    <div class="page">
        <Navbar
            @btn-clicked="showModalHandler"
        />
        <main class="page__content-wrapper">
            <div class="page__container">
                <Nuxt
                    v-hotkey="shortcuts"
                />
            </div>
        </main>
        <SwitcherModal
            v-show="showModal"
            v-hotkey="switcher"
            @toggle-theme="toggleTheme()"
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

        computed: {
            switcher() {
                return {
                    'meta+k': this.showModalHandler,
                    'esc': this.closeModalHandler
                };
            },

            shortcuts() {
                return {
                    't': this.toggleTheme
                };
            }
        },

        methods: {
            showModalHandler() {
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
