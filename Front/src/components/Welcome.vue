<template>
    <div class="main">
        <h2 class="header">Got 15 minutes to learn how to read music?</h2>
        <h4 class="subheader">Get started with our tutorial right away!</h4>
        <a @click="playTrack('Kalimba')"><img src="../assets/nocturne.png" width="80%"/></a>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data () {
            return {
                currentTrack: null,
            };
        },
        computed: {
            ...mapState({
                currentLesson: 'currentLesson',
            }),
        },
        methods: {
            playTrack: (track) => {
                if (this.currentTrack != null) {
                    this.currentTrack.pause();
                }
                this.currentTrack = new Audio(`../static/${track}.mp3`);
                this.currentTrack.play();
            },
        },
    };
</script>

<style scoped>
    .main {
        text-align: center;
        background-color: white;
    }

    .subheader {
        color: #6BB8B5;
        margin: 20px;
    }
</style>
