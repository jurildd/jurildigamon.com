<template>
    <article class="container">
        <div class="container__group">
            <figure class="container__img-wrapper">
                <img
                    src="~/assets/images/me.jpg"
                    alt="A photo of Juril Digamon"
                    loading="lazy"
                />
            </figure>
            <div>
                <p class="t-body">
                    My name is Juril Digamon. I am a product designer, UI engineer, front-end designer,
                    and whatever the hell you want to call it. Basically, I design
                    stuff and code the <em>front</em> front-end of said stuff. I am currently
                    working as a UI/UX Designer at
                    <a
                        href="https://symph.co/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Symph
                    </a>.
                </p>
                <p class="t-body">
                    As a design-minded developer, I'm very keen on writing HTML, CSS, and
                    presentational Javascript with semantics, responsiveness, accessibility, and performance in mind.
                </p>
                <p class="t-body">
                    I also like exploring and learning new stuff in tech. Lately, I've
                    been trying to learn how to use <a
                        href="https://threejs.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Three.js
                    </a>, as well as creating designs for iOS and coding them with
                    <a
                        href="https://developer.apple.com/xcode/swiftui/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        SwiftUI
                    </a>.
                </p>
            </div>
        </div>
        <div class="container__group-btm">
            <p class="t-body">
                Outside of work, I'm a father of
                <Button
                    class="text"
                    @click="showCats = !showCats"
                >
                    two cats
                </Button>
            </p>
            <figure
                v-if="showCats"
                class="container__img-wrapper"
            >
                <img
                    src="~/assets/images/cats.jpg"
                    alt="A photo of two cats"
                    loading="lazy"
                />
                <figcaption>
                    <p class="t-body-sm">
                        My two cats, Levi and Lucca.
                    </p>
                </figcaption>
            </figure>
            <p class="t-body">
                and
                <Button
                    class="text"
                    @click="showDog = !showDog"
                >
                    one dog
                </Button>.
            </p>
            <figure
                v-if="showDog"
                class="container__img-wrapper"
            >
                <img
                    src="~/assets/images/chase.jpg"
                    alt="A photo of a dog"
                    loading="lazy"
                />
                <figcaption>
                    <p class="t-body-sm">
                        The best dog, Chase.
                    </p>
                </figcaption>
            </figure>
            <p class="t-body">
                Most of my free time is spent taking care of them.
                Other than that, I'm currently into
                <Button
                    class="text"
                    @click="showKeeb = !showKeeb"
                >
                    mechanical keyboards
                </Button>,
            </p>
            <figure
                v-if="showKeeb"
                class="container__img-wrapper"
            >
                <img
                    src="~/assets/images/mechkb.jpg"
                    alt="A photo of a mechanical keyboard"
                    loading="lazy"
                />
                <figcaption>
                    <p class="t-body-sm">
                        IDOBAO ID80 75% w/ Gateron Ink Blacks filmed and lubed w/ Krytox 205g0.
                        JWK stabilizers, ePBT WoB keycaps.
                    </p>
                </figcaption>
            </figure>
            <p class="t-body">
                <Button
                    class="text"
                    @click="showPC = !showPC"
                >
                    small form factor PCs
                </Button>,
            </p>
            <figure
                v-if="showPC"
                class="container__img-wrapper"
            >
                <img
                    src="~/assets/images/pc.jpg"
                    alt="A photo of a small form facor PC"
                    loading="lazy"
                />
                <figcaption>
                    <p class="t-body-sm">
                        NCASE M1 v6.1 w/ Noctua fans and cooler. RX 580 GPU lent by a friend and i5-11400 CPU.
                    </p>
                </figcaption>
            </figure>
            <p class="t-body">
                VALORANT, and Dota 2.
                I drink too much coffee and red bull. Way too much.
            </p>
        </div>
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
    .container {
        p + p {
            margin-top: var(--gap-large);
        }
    }

</style>