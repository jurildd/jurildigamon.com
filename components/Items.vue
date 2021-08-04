<template>
    <ul class="switcher__items">
        <slot />
    </ul>
</template>

<script>
    export default {};
</script>

<style>
    .switcher__items {
        display: flex;
        flex-direction: column;
    }
</style>