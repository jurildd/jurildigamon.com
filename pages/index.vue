<template>
    <article class="container">
        <h1 class="t-header">
            Juril Digamon
        </h1>
        <p class="t-body">
            Product designer and design engineer (aka
            <a
                href="https://bradfrost.com/blog/post/frontend-design/"
                target="_blank"
                rel="noreferrer"
            >
                front-end designer
            </a>).
            I specialize in creating modern, responsive, and accessible web designs.
        </p>
        <p class="t-body">
            Currently leading the design team at
            <a
                href="https://hqzen.com/"
                target="_blank"
                rel="noreferrer"
            >
                HQzen
            </a>,
            <a
                href="https://bposeats.com/"
                target="_blank"
                rel="noreferrer"
            >
                BPOSeats
            </a>,
            <a
                href="https://applybpo.com/"
                target="_blank"
                rel="noreferrer"
            >
                ApplyBPO
            </a>, and
            <a
                href="https://scalema.com/"
                target="_blank"
                rel="noreferrer"
            >
                Scalema
            </a>.
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
        margin-bottom: var(--gap-xlarge);
    }
</style>
