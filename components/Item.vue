<template>
    <li
        :class="{active: isActive}"
        class="switcher__item"
        v-on="$listeners"
    >
        <div class="switcher__item-container">
            <div class="switcher__left">
                <div class="switcher__icon">
                    <Icon
                        :name="icon"
                        :width="iconWidth"
                        :height="iconHeight"
                        color="medium-contrast"
                    />
                </div>
                <p class="t-body-md">
                    {{ value }}
                </p>
            </div>
            <div class="switcher__right">
                <Shortcut
                    v-if="value != 'Toggle theme'"
                    keybind="z"
                />
                <Shortcut
                    :keybind="shortcut"
                />
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            },

            icon: {
                type: String,
                required: true
            },

            shortcut: {
                type: String,
                required: true
            },

            iconWidth: {
                type: String,
                required: true
            },

            iconHeight: {
                type: String,
                required: true
            },

            isActive: {
                type: Boolean,
                required: true
            }
        }
    };
</script>

<style lang="scss">
    .switcher {
        &__item {
            position: relative;
            height: 56px;
            width: 100%;
            color: var(--medium-contrast);
            transition: color var(--transition-default);

            &::before {
                content: '';
                position: absolute;
                width: 98%;
                height: 100%;
                border-radius: 5px;
                border-top: 1px solid var(--main-bg);
                border-bottom: 1px solid var(--main-bg);
                left: 50%;
                transform: translateX(-50%);
                background-color: var(--hover-general);
                transition: opacity var(--transition-default);
                opacity: 0;
            }

            &.active {
                color: var(--high-contrast);

                .icon.medium-contrast > * {
                    fill: var(--high-contrast) !important;
                }

                &::before {
                    opacity: 1;
                }
            }

            &:hover {
                color: var(--high-contrast);

                .icon.medium-contrast > * {
                    fill: var(--high-contrast) !important;
                }
            }
        }

        &__item-container {
            display: flex;
            padding: var(--gap) var(--gap-large);
            justify-content: space-between;
            align-items: center;
        }

        &__left {
            display: flex;
            align-items: center;

            & > * + * {
                margin-left: 16px;
            }
        }

        &__icon {
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__right {
            display: flex;
            align-items: center;
        }
    }

</style>