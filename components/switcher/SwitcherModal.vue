<template>
    <Modal @close="closeModalHandler">
        <transition name="scale">
            <div
                v-if="toggled"
                class="switcher modal-content"
            >
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
                                @click="$router.push({path: '/'}); $emit('close')"
                            />
                            <Item
                                value="About"
                                icon="about"
                                icon-width="18"
                                icon-height="18"
                                shortcut="a"
                                @click="$router.push({path: '/about'}); $emit('close')"
                            />
                            <Item
                                value="Contact"
                                icon="contact"
                                icon-width="20"
                                icon-height="16"
                                shortcut="c"
                                @click="$router.push({path: '/contact'}); $emit('close')"
                            />
                            <Item
                                value="Projects"
                                icon="document"
                                icon-width="16"
                                icon-height="20"
                                shortcut="p"
                                @click="$router.push({path: '/projects'}); $emit('close')"
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
        </transition>
    </Modal>
</template>

<script>
    export default {
        props: {
            toggled: {
                type: Boolean,
                required: true
            }
        },

        watch: {
            toggled: {
                handler: 'handleOverflow'
            }
        },

        mounted() {
            const escClickHandler = (e) => {
                if(e.key == 'Escape' && this.toggled) {
                    this.closeModalHandler();
                }
            };

            document.addEventListener('keydown', escClickHandler);
            this.$once('hook:destroyed', () => {
                document.removeEventListener('keydown', escClickHandler);
            });
        },

        methods: {
            closeModalHandler() {
                this.$emit('close');
            },

            handleOverflow() {
                this.$nextTick(() => {
                    if(this.toggled) {
                        document.body.style.overflow = 'hidden';
                    }
                    else {
                        // Delay showing of scrollbar to prevent layout shift
                        setTimeout(() => {
                            document.body.style.overflow = '';
                        }, 100);
                    }
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .switcher {
        background: var(--switcher-bg);
        max-width: var(--inner-content);
        border-radius: var(--radius-icon);
        box-shadow: var(--elevation-high);
        margin: var(--spacer) auto;
        overflow: hidden;

        &__body {
            overflow-y: auto;
            height: 285px;
            scrollbar-color: var(--low-contrast) var(--switcher-header-bg);
            scrollbar-width: thin;

            &::-webkit-scrollbar {
                width: 6px;
                height: 6px;
            }

            &::-webkit-scrollbar-track {
                background-color: var(--switcher-header-bg);
            }

            &::-webkit-scrollbar-thumb {
                background-color: var(--low-contrast);
                border-radius: 10px;
            }
        }
    }

    // Scale transition
    .scale-enter-active, .scale-leave-active {
        transition: opacity var(--transition-default), transform var(--transition-scale);
    }

    .scale-enter, .scale-leave-to {
        transform: scale(0.95);
        opacity: 0;
    }
</style>