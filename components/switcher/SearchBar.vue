<template>
    <div class="search-bar">
        <div class="search-bar__icon">
            <svg
                width="18"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
            >
                <!-- eslint-disable -->
                <path class="search-bar__icon-color" d="M6.5 0A6.5 6.5 0 0113 6.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 016.5 13a6.5 6.5 0 110-13zm0 2C4 2 2 4 2 6.5S4 11 6.5 11 11 9 11 6.5 9 2 6.5 2z" />
                <!-- eslint-enable -->
            </svg>
        </div>
        <input
            id="search"
            class="search-bar__input t-body-md"
            type="text"
            name="search"
            placeholder="Search or type a command"
        >
    </div>
</template>

<script>
    export default {
        name: 'SearchBar'
    };
</script>

<style lang="scss">
    .search-bar {
        position: relative;
        width: 100%;
        height: 56px;
        border-bottom: 1px solid var(--switcher-divider);

        &__icon {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            left: 24px;
            top: 17px;
        }

        &__icon-color {
            fill: var(--low-contrast);
        }

        &__input {
            width: inherit;
            height: inherit;
            background-color: inherit;
            padding: 0 var(--gap-xlarge) 0 var(--gap-bigger);

            &::placeholder {
                color: var(--low-contrast);
                font-size: 1.8rem;
                font-style: normal;
                font-weight: var(--font-weight-regular);
                letter-spacing: -0.05em;
            }
        }
    }
</style>