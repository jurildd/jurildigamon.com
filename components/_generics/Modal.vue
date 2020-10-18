<template>
    <div
        ref="modal"
        class="modal"
        @click="outsideClickHandler($event)"
    >
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'Modal',

        props: {
            allowOutsideClick: {
                type: Boolean,
                default() {
                    return true;
                }
            }
        },

        mounted() {
            document.body.style.overflow = 'hidden';
        },

        destroyed() {
            document.body.style.overflow = 'visible';
        },

        methods: {
            outsideClickHandler(event) {
                if (this.allowOutsideClick) {
                    if (event.target === this.$refs.modal) {
                        this.$emit('close');
                    }
                }
            },
        },
    };
</script>

<style scoped lang="scss">

    .modal-open {
        overflow: hidden;
    }

    .modal {
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: var(--modal-overlay);
        overflow: auto;
    }

    .modal-content {
        background: var(--main-bg);
        max-width: var(--modal-content);
        min-height: 345px;
        border-radius: var(--radius-default);
        box-shadow: var(--elevation-high);
        margin: var(--gap-biggest) auto;
        overflow: hidden;
    }

</style>
