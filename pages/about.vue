<template>
    <article class="container">
        <!-- <figure class="img-wrapper">
            <img
                src="~/assets/images/me.png"
                alt="Juril memoji"
                loading="lazy"
            >
            <figcaption class="t-body-sm">
                I'm not even sure if I look like this, but I guess this'll have to do
            </figcaption>
        </figure> -->
        <p class="t-body">
            My name is Juril, and I am a product designer, UI engineer, front-end designer,
            design engineer, and whatever the hell you want to call it. Basically, I design
            stuff and code the front-front-end of said stuff.
        </p>
        <p class="t-body">
            As a design-minded developer, I'm very keen on writing HTML, CSS, and
            presentational Javascript with semantics, responsiveness, accessibility,
            and performance in mind.
        </p>
        <p class="t-body">
            All that aside, I'm a developer based in Cebu, Philippines. Currently into
            mechanical keyboards, small form factor PCs, VALORANT and Dota 2. I also have
            two cats and one dog.
        </p>
    </article>
</template>

<script>
    export default {
        head: {
            title: 'About',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'About Juril Digamon.'
                }
            ],
        }
    };
</script>

<style lang="scss" scoped>

    .img-wrapper {
        width: 140px;
        margin: 0 auto var(--gap-large);
        animation: spin 4s linear infinite;

        img {
            width: 100%;
            height: 100%;
        }

        figcaption {
            font-style: italic;
        }
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }

</style>