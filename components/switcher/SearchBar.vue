<template>
    <div class="search-bar">
        <div class="search-bar__icon">
            <Icon
                name="search"
                color="low-contrast"
            />
        </div>
        <input
            id="search"
            ref="search"
            class="search-bar__input t-body-md"
            type="text"
            name="search"
            placeholder="Search or type a command"
            @focus="handleFocus()"
            @blur="handleBlur()"
            @input="handleSearch($event)"
        >
    </div>
</template>

<script>
    export default {
        // inject: [
        //     'keyBinds'
        // ],

        created() {

        },

        mounted() {
            this.$refs.search.focus();
        },

        // destroyed() {
        //     this.$eventBus.$emit('toggle-key-binds', true);
        // },

        methods: {
            handleSearch(event) {
            },

            handleFocus() {
                this.$eventBus.$emit('toggle-key-binds', false);
            },

            handleBlur() {
                this.$eventBus.$emit('toggle-key-binds', true);
            }
        }
    };
</script>

<style lang="scss">
    .search-bar {
        position: relative;
        width: 100%;
        height: 56px;
        border-bottom: 1px solid var(--switcher-divider);

        &__icon {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            left: 24px;
            top: 17px;
        }

        &__icon-color {
            fill: var(--low-contrast);
        }

        &__input {
            width: inherit;
            height: inherit;
            background-color: inherit;
            padding: 0 var(--gap-xlarge) 0 var(--gap-bigger);

            &::placeholder {
                color: var(--low-contrast);
                font-size: 1.8rem;
                font-style: normal;
                font-weight: var(--font-weight-regular);
                letter-spacing: -0.05em;
            }
        }
    }
</style>