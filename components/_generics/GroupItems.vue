<template>
    <ul class="switcher__group-items">
        <slot />
    </ul>
</template>

<script>
    export default {
        name: 'GroupItems'
    };
</script>

<style>
    .switcher__group-items {
        display: flex;
        flex-direction: column;
    }

</style>