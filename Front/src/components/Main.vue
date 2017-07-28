<template>
    <div class="main">
        <p>{{ $store.state.currentStage }} asddf </p>
        <p>{{ currentStage }}</p>
        <p>hi~</p>
        <button type="button" class="btn">Basic</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data () {
            return {};
        },
        computed: {
            ...mapState({
                currentStage: 'currentStage',
            }),
        },
        mounted: () => {
            console.log(this.currentStage);
            this.current = 143;
        },
    };
</script>

<style scoped>
    .main {
        margin: 0 30px 0 30px;
        background-color: white;
        /*border-radius: 10px;*/
        padding: 15px;
        /*box-shadow: 0 0 20px whitesmoke;*/
    }
</style>
