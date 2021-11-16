<template>
    <div class="search-bar">
        <div class="search-bar__icon">
            <Icon
                name="search"
                color="low-contrast"
            />
        </div>
        <label class="visually-hidden" for="searchbar">
            Search for a keyword
        </label>
        <input
            id="searchbar"
            ref="search"
            :value="value"
            autocomplete="off"
            class="search-bar__input t-body-md"
            type="text"
            name="searchbar"
            placeholder="Search for a keyword"
            @keydown.down="highlightNext"
            @keydown.up="highlightPrev"
            @keydown.enter="selectHighlighted"
            @keydown.tab.prevent
            @blur="handleBlur()"
            @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
    export default {

        props: {
            value: {
                type: String,
                required: true
            },

            toggled: {
                type: Boolean,
                required: true
            },

            isMobile: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
            };
        },

        watch: {
            toggled: {
                immediate: true,
                handler: function (newVal) {
                    if (newVal && !this.isMobile) {
                        this.handleBlur();
                    }
                }
            }
        },

        methods: {

            handleBlur() {
                if (this.$refs.search) {
                    this.$refs.search.focus();
                }
            },

            highlightNext() {
                this.$emit('arrow-key-handler', 'next');
            },

            highlightPrev() {
                this.$emit('arrow-key-handler', 'prev');
            },

            selectHighlighted() {
                this.$emit('select-highlighted');
            }
        }
    };
</script>

<style lang="scss">
    .search-bar {
        position: relative;
        width: 100%;
        height: 56px;

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
                font-size: 1.6rem;
                font-style: normal;
                font-weight: 400;
                letter-spacing: var(--tracking-body);
                line-height: var(--leading-body);
            }
        }
    }
</style>