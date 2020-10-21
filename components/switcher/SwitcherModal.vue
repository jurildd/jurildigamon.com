<template>
    <Modal @close="closeModalHandler">
        <div class="switcher modal-content">
            <div class="switcher__header">
                <SearchBar />
            </div>
            <div class="switcher__body">
                <GroupItems>
                    <GroupItem label="Sitewide">
                        <Item
                            value="Toggle theme"
                            icon="light"
                            icon-width="22"
                            icon-height="22"
                            shortcut="t"
                            @click="$emit('toggle-theme')"
                        />
                    </GroupItem>
                    <GroupItem label="Navigation">
                        <Item
                            value="Home"
                            icon="home"
                            icon-width="16"
                            icon-height="18"
                            shortcut="h"
                        />
                        <Item
                            value="About"
                            icon="about"
                            icon-width="18"
                            icon-height="18"
                            shortcut="a"
                        />
                        <Item
                            value="Contact"
                            icon="contact"
                            icon-width="20"
                            icon-height="16"
                            shortcut="c"
                        />
                        <Item
                            value="Projects"
                            icon="document"
                            icon-width="16"
                            icon-height="20"
                            shortcut="p"
                        />
                    </GroupItem>
                    <GroupItem label="Social">
                        <Item
                            value="Twitter"
                            icon="twitter"
                            icon-width="22"
                            icon-height="17"
                            shortcut="t"
                        />
                        <Item
                            value="Github"
                            icon="github"
                            icon-width="20"
                            icon-height="20"
                            shortcut="g"
                        />
                    </GroupItem>
                </GroupItems>
            </div>
        </div>
    </Modal>
</template>

<script>
    export default {
        name: 'SwitcherModal',

        methods: {
            closeModalHandler() {
                this.$emit('close');
            }
        }
    };
</script>

<style lang="scss">
    .switcher {
        background: var(--switcher-bg);
        max-width: var(--modal-content);
        border-radius: var(--radius-default);
        box-shadow: var(--elevation-high);
        margin: var(--spacer) auto;
        overflow: hidden;

        &__body {
            overflow-y: auto;
            height: 285px;
            scrollbar-color: var(--low-contrast) transparent;
            scrollbar-width: thin;

            &::-webkit-scrollbar {
                width: 6px;
                height: 6px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: var(--low-contrast);
                border-radius: 10px;
            }
        }
    }
</style>