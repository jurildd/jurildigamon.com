<template>
    <article class="container">
        <div class="container__illustration">
            <img
                src="~/assets/images/construction.png"
                alt="Assembling bricks illustration"
                height="480px"
                width="auto"
                loading="lazy"
            />
            <caption>
                <p class="t-body-sm">
                    Illustration from
                    <a
                        class="t-body-sm"
                        href="https://absurd.design"
                        target="_blank"
                    >
                        absurd.design
                    </a>
                </p>
            </caption>
        </div>
        <div class="container__text">
            <p class="t-header">
                Still on it..
            </p>
            <p class="t-body-sm">
                This page is still under construction. Come back next time.
            </p>
        </div>
    </article>
</template>

<script>
    export default {
        head: {
            title: 'Projects of',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Juril Digamon\'s projects.'
                }
            ],
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__illustration caption {
            margin-top: var(--gap-medium);
        }

        &__illustration img {
            height: 480px;
            width: auto;

            @media screen and (max-width: 480px) {
                height: unset;
                width: 100%;
            }
        }

        &__illustration, &__text {
            display: inherit;
            flex-direction: inherit;
            align-items: inherit;

            & > * + * {
                margin-top: var(--gap-large);
            }
        }

        & > * + * {
                margin-top: var(--gap-biggest);
        }
    }
</style>