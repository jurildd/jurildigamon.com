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
        flex-shrink: 0;
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
            border-radius: var(--radius-icon);

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: inherit;
                background-color: var(--hover-general);
                transition: opacity var(--transition-default);
                opacity: 0;
            }

            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: inherit;
                border: 2px solid var(--high-contrast);
                transition: opacity var(--transition-default);
                opacity: 0;
            }

            &:hover::before, &:focus::before {
                opacity: 1;
            }

            &:focus::after {
                opacity: 1;
            }

            &:focus:not(:focus-visible)::after {
                opacity: 0;
            }

            &:focus-visible::after {
                opacity: 1;
            }
        }

        &.small {
            background-color: var(--high-contrast);
            border-radius: var(--radius-button);
            color: var(--main-bg);
            padding: var(--gap-small) var(--gap-medium);
            font-size: 1.6rem;
            line-height: 1;
            letter-spacing: -0.05em;
            z-index: 1;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: inherit;
                background-color: var(--medium-contrast);
                transition: opacity var(--transition-default);
                opacity: 0;
                z-index: -1;
            }

            &::after {
                content: '';
                position: absolute;
                top: -4px;
                left: -4px;
                width: calc(100% + 8px);
                height: calc(100% + 8px);
                border-radius: inherit;
                border: 2px solid var(--high-contrast);
                transition: opacity var(--transition-default);
                opacity: 0;
            }

            &:hover::before {
                opacity: 1;
            }


            &:focus {
                &::before, &::after {
                    opacity: 1;
                }
            }

            &:active::after, &:focus::after {
                opacity: 1;
            }
        }
    }
</style>