<template>
    <footer class="page__footer">
        <div class="page__footer-container">
            <div class="page__footer-left">
                <p class="t-body-sm">
                    Click the ⌘ icon or use the keyboard shortcut
                </p>
                <div class="page__footer-shortcuts">
                    <Shortcut :keybind="isMacOS ? '⌘' : 'ctrl'" /><Shortcut keybind="k" />
                </div>
                <p class="t-body-sm">
                    to navigate through the site.
                </p>
            </div>
            <Button class="small t-body-sm">
                Got it
            </Button>
        </div>
    </footer>
</template>

<script>
    export default {
        computed: {
            isMacOS() {
                if(process.client && window.navigator.userAgent.indexOf('Mac') != -1) {
                    return true;
                }
                return false;
            }
        },
    };
</script>

<style lang="scss" scoped>
    .page {
        &__footer {
            position: fixed;
            bottom: 0;
            margin-bottom: var(--gap-big);
            max-width: var(--inner-content);
            width: 100%;
        }

        &__footer-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 6px var(--gap-small);
            width: 100%;
            background-color: var(--footer-bg);
            backdrop-filter: blur(12px);
            border-radius: var(--radius-icon);
            box-shadow: var(--elevation-low);
        }

        &__footer-left {
            display: flex;
            align-items: center;
        }

        &__footer-shortcuts {
            display: flex;
            margin: 0 var(--gap-tiny);
        }
    }
</style>