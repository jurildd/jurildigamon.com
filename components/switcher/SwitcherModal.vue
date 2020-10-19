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
                            icon="sun"
                            shortcut="t"
                        />
                    </GroupItem>
                    <!-- <GroupItem label="Navigation">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </GroupItem>
                    <GroupItem label="Social">
                        <Item />
                        <Item />
                        <Item />
                    </GroupItem> -->
                </GroupItems>
                <!-- <ul class="switcher__group-items">
                    <li class="switcher__group-item">
                        <ul class="switcher__items">
                            <li class="switcher__item">

                            </li>
                        </ul>
                    </li>
                </ul> -->
                <!-- <SwitcherItemHeader /> -->
            </div>
        </div>
    </Modal>
</template>

<script>
    export default {
        name: 'SwitcherModal',

        data() {
            return {
                groupItems: [
                    {
                        label: 'Sitewide',
                        items: [
                            {
                                item: 'Toggle light mode',
                                icon: 'theme',
                                shortcut: 't'
                            }
                        ]
                    },
                    {
                        label: 'Navigation',
                        items: [
                            {
                                item: 'Home',
                                icon: 'home',
                                shortcut: 'h'
                            }
                        ]
                    },
                ]
            };
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