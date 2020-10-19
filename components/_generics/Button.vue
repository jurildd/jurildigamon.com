<template>
    <button
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot />
    </button>
</template>


<style lang="scss">
    button {
        position: relative;
        display: flex;
        border: none;
        outline: none;
        background-color: transparent;
        padding: 0;
        cursor: pointer;

        &.icon {
            min-height: 48px;
            min-width: 48px;
            justify-content: center;
            align-items: center;
            border-radius: var(--radius-default);

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: var(--radius-default);
                background-color: var(--hover-general);
                transition: opacity var(--transition-default);
                opacity: 0;
            }

            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: var(--radius-default);
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
    }
</style>