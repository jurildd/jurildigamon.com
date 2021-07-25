<template>
    <Modal @close="closeModalHandler">
        <transition name="scale">
            <div
                v-if="toggled"
                class="switcher modal-content"
            >
                <div class="switcher__header">
                    <SearchBar
                        v-model="search"
                    />
                </div>
                <div class="switcher__body">
                    <GroupItems>
                        <!-- <GroupItem label="Sitewide">
                            <Item
                                value="Toggle theme"
                                icon="light"
                                icon-width="22"
                                icon-height="22"
                                shortcut="t"
                                @click="$emit('toggle-theme')"
                            />
                        </GroupItem> -->
                        <GroupItem
                            v-for="(nav, a) in filteredNavs"
                            :key="`navgroup-${a}`"
                            :label="nav.groupLabel"
                        >
                            <Item
                                v-for="(item, b) in nav.groupItems"
                                :key="`item-${b}`"
                                :value="item.value"
                                :icon="item.icon"
                                :icon-width="item.width"
                                :icon-height="item.height"
                                :shortcut="item.shortcut"
                                @click="goToRoute(item.route)"
                            />
                        </GroupItem>
                        <!-- <GroupItem label="Social">
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
                        </GroupItem> -->
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

        data() {
            return {
                search: '',
                navs: [
                    {
                        groupLabel: 'Sitewide',
                        groupItems: [
                            {
                                value: 'Toggle theme',
                                icon: 'theme',
                                width: '21',
                                height: '22',
                                shortcut: 't',
                                route: 'toggle-theme'
                            }
                        ]
                    },
                    {
                        groupLabel: 'Navigation',
                        groupItems: [
                            {
                                value: 'Home',
                                icon: 'home',
                                width: '16',
                                height: '18',
                                shortcut: 'h',
                                route: '/'
                            },
                            {
                                value: 'About',
                                icon: 'about',
                                width: '18',
                                height: '18',
                                shortcut: 'a',
                                route: '/about'
                            },
                            {
                                value: 'Contact',
                                icon: 'contact',
                                width: '20',
                                height: '16',
                                shortcut: 'c',
                                route: '/contact'
                            },
                            {
                                value: 'Projects',
                                icon: 'document',
                                width: '16',
                                height: '20',
                                shortcut: 'p',
                                route: '/projects'
                            },
                        ]
                    },
                    {
                        groupLabel: 'Social',
                        groupItems: [
                            {
                                value: 'Twitter',
                                icon: 'twitter',
                                width: '22',
                                height: '17',
                                shortcut: 't',
                                route: '/'
                            },
                            {
                                value: 'Github',
                                icon: 'github',
                                width: '20',
                                height: '20',
                                shortcut: 'g',
                                route: '/'
                            },
                        ]
                    }
                ]
            };
        },

        computed: {
            filteredNavs() {
                // return this.navs.filter(group => {
                //     return group.groupItems.some(item => {
                //         return item.value.toLowerCase().includes(this.search.toLowerCase());
                //     });
                // });
                return this.navs.reduce((r, {groupLabel, groupItems}) => {
                    let o = groupItems.filter(({value}) => value.toLowerCase().includes(this.search.toLowerCase()));
                    if (o && o.length) {
                        r.push({groupLabel, groupItems : [...o]});
                    }
                    return r;
                }, []);
            }
        },

        watch: {
            toggled: {
                handler: 'handleOverflow'
            }
        },

        mounted() {
            console.log(this.navs);
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
                this.search = '';
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
            },

            goToRoute(route) {
                if (route === 'toggle-theme') {
                    this.$emit('toggle-theme');
                }
                else {
                    this.$router.push({path: route});
                }
                this.search = '';
                this.$emit('close');
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