<template>
    <ul class="switcher__items">
        <slot />
    </ul>
</template>

<script>
    export default {
        name: 'Items'
    };
</script>

<style>
    .switcher__items {
        display: flex;
        flex-direction: column;
    }
</style>