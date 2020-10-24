<template>
    <nav class="navbar">
        <div class="navbar__content-wrapper">
            <div class="navbar__container">
                <NuxtLink
                    to="/"
                    class="navbar__logo"
                >
                    <svg
                        width="43"
                        height="19"
                        viewBox="0 0 43 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <!-- eslint-disable -->
                        <path class="navbar__color" d="M5.55469 18.2812C8.87109 18.2812 10.8281 16.3242 10.8281 12.9961V1.08984H8.20312V12.9727C8.20312 14.9062 7.26562 15.9375 5.53125 15.9375C3.96094 15.9375 3.15234 14.9297 3.04688 13.6406L3.03516 13.5352H0.445312L0.457031 13.6758C0.597656 16.3711 2.42578 18.2812 5.55469 18.2812Z" />
                        <path class="navbar__color" d="M17.8711 18.2461C19.7461 18.2461 21 17.3906 21.6445 16.1484H21.7031V18H24.2461V5.67188H21.7031V12.8672C21.7031 14.7891 20.5547 16.0664 18.7734 16.0664C17.0156 16.0664 16.1484 15.0352 16.1484 13.1719V5.67188H13.6172V13.6641C13.6172 16.5 15.1641 18.2461 17.8711 18.2461Z" />
                        <path class="navbar__color" d="M26.7539 18H29.2852V10.582C29.2852 8.83594 30.293 7.74609 31.9219 7.74609C32.4141 7.74609 32.8594 7.80469 33.0586 7.88672V5.53125C32.8594 5.49609 32.543 5.4375 32.1797 5.4375C30.7266 5.4375 29.625 6.30469 29.25 7.71094H29.1914V5.67188H26.7539V18Z" />
                        <path class="navbar__color" d="M36 3.77344C36.832 3.77344 37.4766 3.11719 37.4766 2.32031C37.4766 1.51172 36.832 0.855469 36 0.855469C35.1797 0.855469 34.5234 1.51172 34.5234 2.32031C34.5234 3.11719 35.1797 3.77344 36 3.77344ZM34.7344 18H37.2656V5.67188H34.7344V18Z" />
                        <path class="navbar__color" d="M39.9727 18H42.5039V1.08984H39.9727V18Z" />
                        <!-- eslint-enable -->
                    </svg>
                </NuxtLink>
                <Button
                    class="navbar__cmd icon"
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
        name: 'Navbar',

        methods: {
            cmdClickHandler() {
                this.$emit('btn-clicked');
            }
        }
    };
</script>

<style lang="scss">
    .navbar {
        padding-top: 56px;
        width: 100%;

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
            min-height: 50px;
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
                width: 100%;
                height: 100%;
                border-radius: var(--radius-icon);
                border: 2px solid var(--medium-contrast);
                transition: opacity var(--transition-default);
                opacity: 0;
            }

            &:hover::before {
                opacity: 1;
            }

            &:active::after, &:focus::after {
                opacity: 1;
            }
        }

        &__cmd {
            margin-right: -8px;
        }

        &__color {
            fill: var(--nav);
        }
    }
</style>