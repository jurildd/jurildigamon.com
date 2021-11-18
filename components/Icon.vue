<template>
    <svg
        :id="name"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        :class="color"
        class="icon"
        fill="none"
        role="presentation"
        stroke-width="2"
        focusable="false"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <!-- eslint-disable -->
        <path
            v-if="name == 'cmd'"
            d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
        />
        <template v-else-if="name == 'search'">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </template>
        <path v-else-if="name == 'theme'" d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
        <template v-else-if="name == 'home'">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>
        </template>
        <template v-else-if="name == 'about'">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </template>
        <template v-else-if="name == 'contact'">
            <circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
        </template>
        <path
            v-else-if="name == 'document'"
            d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        />
        <template v-else-if="name == 'resume'">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
        </template>
        <path
            v-else-if="name == 'twitter'"
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
        />
        <path
            v-else-if="name == 'github'"
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        />
        <template v-else-if="name == 'linkedin'">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
        </template>
        <path  v-else-if="name == 'external'" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>
        <!-- eslint-enable -->
    </svg>
</template>

<script>
    export default {

        props: {
            name: {
                type: String,
                required: true
            },

            color: {
                type: String,
                required: true
            }
        }
    };
</script>

<style lang="scss">
    .icon {
        &.nav > * {
            stroke: var(--nav);
        }

        &.low-contrast > * {
            stroke: var(--low-contrast);
        }

        &.medium-contrast > * {
            stroke: var(--medium-contrast);
            transition: stroke var(--transition-default);
        }
    }
</style>