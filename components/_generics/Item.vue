<template>
    <li class="switcher__item">
        <div class="switcher__item-container">
            <span class="t-body-md">
                {{ value }}
            </span>
            <!-- <span>
                {{ icon }}
            </span> -->
            <div class="switcher__item-shortcut">
                <span class="t-body-sm">
                    {{ shortcut }}
                </span>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'Item',

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
            transition: color var(--transition-quick);

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: var(--hover-general);
                transition: opacity var(--transition-quick);
                opacity: 0;
            }

            &:hover {
                color: var(--high-contrast);
            }

            &:hover::before {
                opacity: 1;
            }
        }

        &__item-container {
            display: flex;
            padding: var(--gap) var(--gap-large);
            justify-content: space-between;
            align-items: center;
        }

        &__item-shortcut {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 24px;
            min-width: 24px;
            border-radius: 7px;
            background-color: var(--hover-general);
        }
    }

</style>