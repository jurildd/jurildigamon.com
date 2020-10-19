<template>
    <li class="switcher__group-item">
        <div class="switcher__group-label">
            <span class="t-body-tiny">
                {{ label }}
            </span>
        </div>
        <Items>
            <slot />
        </Items>
    </li>
</template>

<script>
    export default {
        name: 'GroupItem',

        props: {
            label: {
                type: String,
                required: true
            }
        }
    };
</script>

<style lang="scss">
    .switcher {
        &__group-item {
            display: flex;
            flex-direction: column;
        }

        &__group-label {
            display: flex;
            padding: var(--gap-small) var(--gap-large);
            background-color: var(--switcher-header-bg);
        }
    }
</style>