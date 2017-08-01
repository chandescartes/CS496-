<template>
    <div class="main">
        <h2 class="header">Got 15 minutes to learn how to read music?</h2>
        <h3 class="subheader">Get started with our tutorial right away!</h3>
        <p>Here are some of the pieces you will be able to read and play in 15 minutes!</p>
        <div class="sheet-music">
            <p class="subtext">Frédéric Chopin - Nocturne Op.9 No.2</p>
            <img src="../assets/welcome/nocturne.png" height="200px"/>
            <div class="overlap"><div class="gray" @click="playTrack('nocturne')">click to play</div></div>
        </div>
        <div class="sheet-music">
            <p class="subtext">DJ Okawari - Flower Dance</p>
            <img src="../assets/welcome/flower_dance.png" height="200px"/>
            <div class="overlap"><div class="gray" @click="playTrack('flower_dance')">click to play</div></div>
        </div>


    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import FooterBar from './FooterBar';

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
        components: {
            FooterBar,
        },
        mounted: () => {
            window.scrollTo(0, 0);
        }
    };
</script>

<style scoped>
    .main {
        text-align: center;
    }

    p {
        font-size: 24px;
    }


    .subheader {
        color: #6BB8B5;
    }

    .sheet-music {
        border: solid 3px whitesmoke;
        margin-top: 20px;
        text-align: center;
    }

    .subtext {
        color: darkgray;
    }

    .overlap {
        position: relative;
        z-index: 1000;
    }

    .gray {
        background-color: whitesmoke;
        color: lightgray;
        height: 20px;
        width: 80px;
        cursor: pointer;
    }
</style>
