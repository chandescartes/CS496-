<template>
    <div class="main">
        <p>asdf</p>
        <button type="button" class="btn">Basic</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {};
        },
        computed: {
            ...mapState({
                currentStage: 'currentStage',
            }),
        },
    };
</script>

<style scoped>
    .main {
        margin: 0 6vw 0 6vw;
        background-color: white;
        border-radius: 10px;
        padding: 15px;
    }
</style>
