<template>
    <svg
        :id="name"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :class="color"
        class="icon"
        fill="none"
        :viewBox="`0 0 ${width} ${height}`"
        role="presentation"
        focusable="false"
    >
        <!-- eslint-disable -->

        <path
            v-if="name == 'cmd'"
            d="M8 2.667A5.333 5.333 0 0113.333 8v2.667h5.334V8A5.333 5.333 0 1124 13.333h-2.667v5.334H24A5.333 5.333 0 1118.667 24v-2.667h-5.334V24A5.333 5.333 0 118 18.667h2.667v-5.334H8A5.333 5.333 0 118 2.667zM21.333 24A2.667 2.667 0 1024 21.333h-2.667V24zm-2.666-10.667h-5.334v5.334h5.334v-5.334zM8 21.333A2.667 2.667 0 1010.667 24v-2.667H8zM10.667 8A2.667 2.667 0 108 10.667h2.667V8zM24 10.667A2.666 2.666 0 1021.333 8v2.667H24z"
        />
        <path
            v-else-if="name == 'search'"
            d="M6.5 0A6.5 6.5 0 0113 6.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 016.5 13a6.5 6.5 0 110-13zm0 2C4 2 2 4 2 6.5S4 11 6.5 11 11 9 11 6.5 9 2 6.5 2z"
        />
        <path
            v-else-if="name == 'theme'"
            d="M5.5 1c-1.79 1.15-3 3.18-3 5.5s1.21 4.35 3.03 5.5C2.46 12 0 9.54 0 6.5A5.5 5.5 0 015.5 1zm11.57 1.5l1.43 1.43L2.93 19.5 1.5 18.07 17.07 2.5zm-6.18 2.43L9.41 4 7.97 5l.42-1.7L7 2.24l1.75-.12.58-1.65L10 2.1l1.73.03-1.35 1.13.51 1.67zm-3.3 3.61l-1.16-.73-1.12.78.34-1.32-1.09-.83 1.36-.09.45-1.29.51 1.27 1.36.03-1.05.87.4 1.31zM17 12.5a5.5 5.5 0 01-8.76 4.43l7.69-7.69c.67.91 1.07 2.04 1.07 3.26zm-4.4 6.58l2.77-1.15-.24 3.35-2.53-2.2zm4.33-2.7l1.15-2.77 2.2 2.54-3.35.23zm1.15-4.96l-1.14-2.78 3.34.24-2.2 2.54zM7.63 17.93l2.77 1.15-2.53 2.19-.24-3.34z"
        />
        <path
            v-else-if="name == 'home'"
            d="M8 0l8 6v12h-5v-7H5v7H0V6l8-6z"
        />
        <path
            v-else-if="name == 'about'"
            d="M3 14c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H3v-1zm9-8a3 3 0 11-6 0 3 3 0 016 0zM0 2v14a2 2 0 002 2h14a2 2 0 002-2V2a2 2 0 00-2-2H2a2 2 0 00-2 2z"
        />
        <path
            v-else-if="name == 'contact'"
            d="M18 0H2C.89 0 0 .89 0 2v12a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2zm-3 13H5v-2h10v2zm0-4H5V7h10v2zm3-4h-3V2h3"
        />
        <path
            v-else-if="name == 'document'"
            d="M9 7h5.5L9 1.5V7zM2 0h8l6 6v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2C0 .89.89 0 2 0zm9 16v-2H2v2h9zm3-4v-2H2v2h12z"
        />
        <path
            v-else-if="name == 'twitter'"
            d="M21.46 2c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C17.37.5 16.26 0 15 0c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C7.28 5.09 4.11 3.38 2 .79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C2.44 16.29 4.7 17 7.12 17 15 17 19.33 10.46 19.33 4.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
        />
        <path
            v-else-if="name == 'github'"
            d="M10 0A10 10 0 000 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z"
        />
        <path
            v-else-if="name == 'linkedin'"
            d="M16 0a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3V7.13H7.13v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM3.88 5.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94V7.13H2.5v8.37h2.77z" />
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
            },

            width: {
                type: String,
                default: '18',
                required: false
            },

            height: {
                type: String,
                default: '18',
                required: false
            },
        }
    };
</script>

<style lang="scss">
    .icon {
        &.nav > * {
            fill: var(--nav);
        }

        &.low-contrast > * {
            fill: var(--low-contrast);
        }

        &.medium-contrast > * {
            fill: var(--medium-contrast);
            transition: fill var(--transition-default);
        }
    }
</style>