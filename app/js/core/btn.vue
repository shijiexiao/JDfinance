<template>
    <div :class="[btnClass,cname]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "btn",
        props: {
            cname: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                btnClass: 'btn',

            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../../css/element";

    .btn {
        @include btn;

    }

</style>