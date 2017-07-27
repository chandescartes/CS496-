<template>
    <div id="navigation">
        <button class="btn element" autofocus>Welcome</button>
        <button class="btn element" v-for="stage in stages">{{ stage.message }}</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stages: [
                    { message: 'Stage 1' },
                    { message: 'Stage 2' },
                    { message: 'Stage 3' },
                ],
            };
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
        padding: 20px;
        background-color: #ededed;
    }

    .element {
        width: 100%;
        height: 50px;
        background-color: transparent;
    }

    .element:active {
        background-color: darkgray;
    }

    .element:focus {
        outline: 0;
        background-color: darkgray;
    }
</style>
