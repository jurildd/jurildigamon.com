<template>
    <article class="container">
        <h1 class="t-header">
            Hello.
        </h1>
        <p class="t-body">
            I’m Juril Digamon, a product designer and design engineer (aka
            <a
                href="https://bradfrost.com/blog/post/frontend-design/"
                target="_blank"
                rel="noreferrer"
            >
                front-end designer
            </a>).
            I specialize in creating modern, responsive, and accessible web designs.
            <br />
            <br />
        </p>
    </article>
</template>

<script>
    export default {
        head: {
            title: '',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'I’m Juril Digamon, a product designer and design engineer (aka front-end'
                        + ' designer). I specialize in creating modern, responsive, and accessible web designs.'
                }
            ],
        }
    };
</script>

<style lang="scss" scoped>
    .t-header {
        margin-bottom: var(--gap-large);
    }
</style>
