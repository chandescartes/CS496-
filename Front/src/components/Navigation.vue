<template>
    <div id="navigation">
        <button class="btn element" :class="{'element-active': currentStage >= index}" v-for="(stage, index) in stages">
            {{ stage.message }}
        </button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data () {
            return {
                stages: [
                    { message: 'Welcome' },
                    { message: 'Stage 1' },
                    { message: 'Stage 2' },
                    { message: 'Stage 3' },
                ],
            };
        },
        computed: {
            ...mapState({
                currentStage: 'currentStage',
            }),
        },
        methods: {
            isFinished: mStage => (mStage <= this.currentStage),
            tmp: () => 0,
        },
    };
</script>

<style scoped>
    #navigation {
        height: 100vh;
        /*padding: 20px;*/
        #background-color: #ededed;
        background-color: white;
        border-right: solid lightgray;
        border-width: 1px;
    }

    .element {
        width: 100%;
        height: 50px;
        background-color: transparent;
        color: #7d4627;
        font-family: Arial;
        border-radius: 0;
    }

    .element-active {
        /*background-color: darkgray;*/
        background-color: #edd9c0;
    ;
    }

    .element:focus {
        outline: 0;
        background-color: darkgray;
    }
</style>
