<template>
    <Modal @close="closeModalHandler">
        <transition name="scale">
            <div
                v-show="toggled"
                class="switcher modal-content"
            >
                <div class="switcher__header">
                    <SwitcherSearchBar
                        v-model="search"
                        :toggled="toggled"
                        :is-mobile="isMobile"
                        @arrow-key-handler="arrowKeyHandler"
                        @select-highlighted="selectHighlighted"
                    />
                </div>
                <div
                    ref="searchBody"
                    class="switcher__body"
                >
                    <GroupItems>
                        <GroupItem
                            v-for="(nav, index) in filteredNavs"
                            :key="`navgroup-${index}`"
                            :label="nav.groupLabel"
                        >
                            <Item
                                v-for="(item, idx) in nav.groupItems"
                                :id="`navitem-${item.id}`"
                                :key="`navitem-${idx}`"
                                :value="item.value"
                                :icon="item.icon"
                                :icon-width="item.width"
                                :icon-height="item.height"
                                :shortcut="item.shortcut"
                                :is-active="item.id === highlightedIndex"
                                @click="goToRoute(item.route)"
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

        data() {
            return {
                search: '',
                navs: [
                    {
                        groupLabel: 'Sitewide',
                        groupItems: [
                            {
                                id: 0,
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
                                id: 1,
                                value: 'Home',
                                icon: 'home',
                                width: '16',
                                height: '18',
                                shortcut: 'h',
                                route: '/'
                            },
                            {
                                id: 2,
                                value: 'About',
                                icon: 'about',
                                width: '18',
                                height: '18',
                                shortcut: 'a',
                                route: '/about'
                            },
                            {
                                id: 3,
                                value: 'Contact',
                                icon: 'contact',
                                width: '20',
                                height: '16',
                                shortcut: 'c',
                                route: '/contact'
                            },
                            {
                                id: 4,
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
                                id: 5,
                                value: 'Twitter',
                                icon: 'twitter',
                                width: '22',
                                height: '17',
                                shortcut: 'r',
                                route: 'twitter'
                            },
                            {
                                id: 6,
                                value: 'Github',
                                icon: 'github',
                                width: '20',
                                height: '20',
                                shortcut: 'g',
                                route: 'github'
                            },
                            {
                                id: 7,
                                value: 'Linkedin',
                                icon: 'linkedin',
                                width: '18',
                                height: '18',
                                shortcut: 'l',
                                route: 'linkedin'
                            },
                        ]
                    }
                ],
                highlightedIndex: -1,
                total: 0,
                INITIAL_HEIGHT: 285,
                MOBILE_HEIGHT: 540
            };
        },

        computed: {
            filteredNavs() {
                let i = 0;
                return this.navs.reduce((r, {groupLabel, groupItems}) => {
                    let o = groupItems.filter(({value}) => value.toLowerCase().includes(this.search.toLowerCase()));
                    if (o && o.length) {
                        o.forEach((item) => {
                            item.id = i++;
                        });
                        r.push({
                            groupLabel,
                            groupItems: [...o, ],
                        });
                    }
                    return r;
                }, []);
            },

            isMobile() {
                if (process.client) {
                    return document.body.clientWidth < 600 ? true : false;
                }
                return false;
            }
        },

        watch: {
            toggled() {
                this.$eventBus.$emit('toggle-key-binds', true);
                this.$nextTick(() => {
                    if (this.toggled) {
                        document.body.style.overflow = 'hidden';
                    }
                    else {
                        // Delay actions to prevent layout shift
                        setTimeout(() => {
                            this.$eventBus.$emit('toggle-key-binds', false);
                            this.search = '';
                            this.highlightedIndex = -1;
                            document.body.style.overflow = '';
                        }, 100);
                    }
                });
            },

            filteredNavs: {
                deep: true,
                immediate: true,
                handler: function (newVal) {
                    this.total = newVal.reduce((acc, val) => {
                        return acc + val.groupItems.length;
                    }, 0);
                }

            },

            search(newVal) {
                if (!this.isMobile) {
                    console.log('here');
                    this.handleHeightAnimation();
                }
                if (newVal) {
                    this.highlightedIndex = 0;
                }
                else {
                    this.highlightedIndex = -1;
                }
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

            goToRoute(route) {
                if (route === 'toggle-theme') {
                    this.$emit('toggle-theme');
                }
                else {
                    this.$emit('route', route);
                }
                this.closeModalHandler();
            },

            arrowKeyHandler(cmd) {
                if (cmd == 'prev') {
                    this.highlight(this.highlightedIndex - 1);
                }
                if (cmd == 'next') {
                    this.highlight(this.highlightedIndex + 1);
                }
            },

            highlight(index) {
                this.highlightedIndex = index;

                if (this.highlightedIndex < 0) {
                    this.highlightedIndex = this.total - 1;
                }

                if (this.highlightedIndex >= this.total) {
                    this.highlightedIndex = 0;
                }

                document.getElementById(`navitem-${this.highlightedIndex}`).scrollIntoView({
                    block: 'nearest'
                });
            },

            selectHighlighted() {
                let route = this.filteredNavs.reduce((acc, {groupItems}) => {
                    let r = groupItems.filter(({id}) => id === this.highlightedIndex);
                    if (r && r.length) {
                        acc = r[0].route;
                    }
                    return acc;
                }, '');
                this.goToRoute(route);
            },

            handleHeightAnimation() {
                if (this.$refs.searchBody.children) {
                    this.$nextTick(() => {
                        let childrenHeight = this.$refs.searchBody.children[0].clientHeight;
                        if (childrenHeight < this.INITIAL_HEIGHT) {
                            this.$refs.searchBody.style.height = childrenHeight + 'px';
                        }
                        else {
                            this.$refs.searchBody.style.height = this.INITIAL_HEIGHT + 'px';
                        }

                    });
                }
                // if (body.clientHeight) {
                //     body.style.height = 0;
                // }
                // else if (body.clientHeight == 0) {
                //     body.style.height = body.scrollHeight + 'px';
                // }

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

        @media screen and (max-width: 600px) {
            position: absolute;
            width: 100%;
            margin: 0;
            bottom: 0;
            border-radius: var(--radius-icon) var(--radius-icon) 0 0;
            margin-top: auto;
        }

        &__body {
            overflow-y: auto;
            min-height: 0;
            height: 100%;
            max-height: 285px;
            scrollbar-color: var(--low-contrast) var(--switcher-header-bg);
            scrollbar-width: thin;
            transition: height .2s cubic-bezier(0.4, 0.0, 0.2, 1);

            @media screen and (max-width: 600px) {
                max-height: 540px;
                min-height: 540px;
            }

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