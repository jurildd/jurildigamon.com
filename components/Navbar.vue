<template>
    <nav class="navbar">
        <div class="navbar__content-wrapper">
            <div class="navbar__container">
                <NuxtLink
                    to="/"
                    class="navbar__logo"
                    aria-label="Logo"
                >
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    ><path
                        d="M28 15c0 7.18-5.82 13-13 13S2 22.18 2 15 7.82 2 15 2s13 5.82 13 13z"
                        class="navbar__color"
                        stroke-width="3"
                        shape-rendering="geometricPrecision"
                    /><path
                        d="M21.5 15a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                        class="navbar__color"
                        stroke-width="3"
                        shape-rendering="geometricPrecision"
                    /></svg>
                </NuxtLink>
                <transition name="fade">
                    <h1
                        v-if="getCurrentRoute && !isChanging"
                        class="t-body"
                    >
                        {{ getCurrentRoute }}
                    </h1>
                </transition>
                <Button
                    class="navbar__cmd icon"
                    aria-label="Menu"
                    @click="cmdClickHandler"
                >
                    <Icon
                        width="32"
                        height="32"
                        name="cmd"
                        color="nav"
                    />
                </Button>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {

        data() {
            return {
                isChanging: false
            };
        },

        computed: {
            getCurrentRoute() {
                let route = this.$route.name;
                if (route == 'index') {
                    return '';
                }
                if (route) {
                    return route.charAt(0).toUpperCase() + route.slice(1);
                }
                return '';
            }
        },

        watch: {
            getCurrentRoute: {
                immediate: true,
                handler: function (newVal) {
                    if (newVal) {
                        this.isChanging = true;
                        setTimeout(() => {
                            this.isChanging = false;
                        }, 50);
                    }
                }
            }
        },

        methods: {
            cmdClickHandler() {
                this.$emit('btn-clicked');
            }
        }
    };
</script>

<style lang="scss">
    .navbar {
        padding-top: var(--gap-big);
        width: 100%;

        @media screen and (max-width: 600px) {
            padding-top: var(--gap-large);
        }

        &__content-wrapper {
            max-width: var(--body-content);
            margin: 0 auto;
        }

        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
			margin: 0 var(--gap);
		}

        &__logo {
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            min-height: 48px;
            min-width: 48px;
            padding: 0 var(--gap-small);
            margin-left: -8px;
            border-radius: var(--radius-icon);
            outline: none;

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: var(--radius-icon);
                background-color: var(--hover-general);
                transition: opacity var(--transition-default);
                opacity: 0;
            }

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: var(--radius-icon);
                border: 2px solid var(--medium-contrast);
                transition: opacity var(--transition-default);
                opacity: 0;
            }

            &:hover::before, &:focus::before {
                opacity: 1;
            }
        }

        &__cmd {
            margin-right: -8px;
        }

        &__color {
            stroke: var(--nav);
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