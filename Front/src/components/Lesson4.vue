<template>
    <div class="main">
        <p>
            You may have seen vertical lines separating notes into little boxes. These boxes are called <span class="keyword">measures</span>.
            Each <span class="repeat">measure</span> has the same number of <span class="keyword">beats</span>,
            specified by the piece's <span class="keyword">time signature</span> at the beginning of a line.
        </p>
        <p>
            The following piece has a <span class="keyword">4/4 time signature</span>.
            This means that there are <span class="repeat">four beats</span> in every <span class="repeat">measure</span>,
            and that every <span class="repeat">quarter note</span> gets <span class="repeat">one beat</span>.
        </p>
        <img class="img" src="../assets/lesson4/4-4.png" height="120px"/>
        <p>
            On the other hand, this piece has a <span class="keyword">3/4 time signature</span>.
            You can check that each <span class="repeat">measure</span> has only <span class="repeat">three beats</span>,
            with each beat being a <span class="repeat">quarter note</span> again.
        </p>
        <img class="img" src="../assets/lesson4/3-4.png" height="120px"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {};
        },
        methods: {
            initPiano() {
                var piano = require('./PianoInstrument');
                var WebAudioFontPlayer = require('webaudiofont');

                this.selectedPreset = piano;
                var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
                this.audioContext = new AudioContextFunc();
                this.player = new WebAudioFontPlayer();
                this.player.loader.decodeAfterLoading(this.audioContext, 'selectedPreset');

                this.buffering();
            },
            play(pitch, duration) {
                this.player.queueWaveTable(this.audioContext, this.audioContext.destination, this.selectedPreset, 0, this.getPitch(pitch), duration);
            },
        },
        mounted: () => {
            window.scrollTo(0, 0);
            this.initPiano();
        },
    };
</script>

<style scoped>
    .main {
        text-align: center;
    }

    p {
        font-size: 24px;
        margin-top: 20px;
        text-align: justify;
    }

    .img {
        margin: 10px 0 0 0;
    }
</style>
