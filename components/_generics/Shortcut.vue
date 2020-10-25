<template>
    <kbd class="shortcut">
        {{ keybind }}
    </kbd>
</template>

<script>
    export default {
        name: 'Shortcut',

        props: {
            keybind: {
                type: String,
                required: true
            }
        }
    };
</script>

<style lang="scss" scoped>
    .shortcut {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 var(--gap-tiny);
        min-height: 24px;
        min-width: 24px;
        border-radius: var(--radius-button);
        background-color: var(--hover-general);
    }

    .shortcut + .shortcut {
        margin-left: var(--gap-tiny);
    }
</style>