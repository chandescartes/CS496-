<template>
    <div class="main">
        <h2 class="header">
            <span v-if="language ==='eng'">Got 15 minutes to learn how to read music?</span>
            <span v-else>15분만에 악보 읽는 법을 배울 수 있을까요?</span>
        </h2>
        <h3 class="subheader">
            <span v-if="language ==='eng'">Get started with our tutorial right away!</span>
            <span v-else>지금 바로 A2A와 함께 악보 읽는 법을 공부해보세요</span>
        </h3>
        <p>
            <span v-if="language ==='eng'">Here are some of the pieces you will be able to read and play in 15 minutes!</span>
            <span v-else>15분 후에는 당신도 아래 곡들의 악보를 읽고, 연주할 수 있게 될겁니다.</span>
        </p>
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
                language: 'language',
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
