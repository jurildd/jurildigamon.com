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
        props: {
            allowOutsideClick: {
                type: Boolean,
                default() {
                    return true;
                }
            }
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
</style>
