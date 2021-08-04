<template>
    <div class="error-page">
        <div class="error-page__illustration">
            <img
                src="~/assets/images/404.png"
                alt="Person with lightbulb head illustration"
                loading="lazy"
            />
            <caption>
                <p class="t-body-tiny">
                    Illustration from
                    <a
                        class="t-body-tiny"
                        href="https://absurd.design"
                        target="_blank"
                    >
                        absurd.design
                    </a>
                </p>
            </caption>
        </div>
        <div class="error-page__text">
            <p class="t-body-bold">
                404
            </p>
            <p class="t-body-sm">
                Err, uh, nothing to see here.. yet.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'error'
    };
</script>

<style lang="scss" scoped>
    .error-page {
        display: flex;
        flex-direction: column;
        align-items: center;

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
                margin-top: var(--gap);
            }
        }

        & > * + * {
               margin-top: var(--gap-biggest);
        }

        // p {
        // }
    }
</style>