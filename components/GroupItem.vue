<template>
    <li class="switcher__group-item">
        <div class="switcher__group-label">
            <span class="t-body-sm">
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
            color: var(--switcher-header);
            user-select: none;
        }
    }
</style>