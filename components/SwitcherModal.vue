<template>
    <Modal @close="closeModalHandler">
        <div class="modal-content">
            <!-- Search bar -->
        </div>
    </Modal>
</template>

<script>
    import Modal from '~/components/_generics/Modal.vue';

    export default {
        name: 'SwitcherModal',

        components: {
            Modal
        },

        methods: {
            closeModalHandler() {
                this.$emit('close');
            }
        }
    };
</script>

<style>

</style>