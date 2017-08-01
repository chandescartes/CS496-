<template>
    <div class="main">
        <img src="../assets/lesson1/staff.png" height="110px"/>
        <p>The <span class="keyword">staff</span> is an arrangement of five parallel lines and the spaces between them.</p>
        <p>
            A <span class="keyword">clef</span> is a symbol on the right end of the <span class="repeat">staff</span> telling us how to read the notes on the lines.
            The two main <span class="repeat">clefs</span> are the <span class="keyword">treble clef</span> and <span class="keyword">bass clef</span>.
        </p>
        <div>
            <div class="inline-block right"><img src="../assets/lesson1/treble_clef.png" height="110px"/></div>
            <p>
                1. The <span class="repeat">treble clef</span> notates higher pitches of music,
                so if your instrument has a higher pitch, such as a flute, violin, or saxophone,
                your sheet music is written in the <span class="repeat">treble clef</span>.
            </p>
        </div>
        <div>
            <div class="inline-block right"><img src="../assets/lesson1/bass_clef.png" height="110px"/></div>
            <p>
                2. The <span class="repeat">bass clef</span> notates lower pitches of music,
                so if your instrument has a lower pitch, such as a bassoon, tuba or cello,
                your sheet music is written in the <span class="repeat">bass clef</span>.
            </p>
        </div>
        <p>You'll better understand what <span class="repeat">clefs</span> mean in the next lesson.</p>

    </div>
</template>

<script>
    import FooterBar from './FooterBar';

    export default {
        data () {
            return {};
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
        margin-top: 20px;
        text-align: justify;
    }

    .inline-block {
        display: inline-block;
        margin: 0 10px 0 30px;
    }

    .right {
        float: right;
    }

</style>
