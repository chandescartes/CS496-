<template>
    <div class="main">
        <div id="englesson" v-if="language === 'eng'">
            <img src="../assets/lesson1/staff.png" height="110px" />
            <p>The <span class="keyword">staff</span> is an arrangement of five parallel lines and the spaces between them.</p>
            <p>
                    A <span class="keyword">clef</span> is a symbol on the right end of the <span class="repeat">staff</span> telling us how to read the notes on the lines. The two main <span class="repeat">clefs</span> are the <span class="keyword">treble clef</span>        and <span class="keyword">bass clef</span>.
            </p>
            <div>
                    <div class="inline-block right"><img src="../assets/lesson1/treble_clef.png" height="110px" /></div>
                    <p>
                            1. The <span class="repeat">treble clef</span> notates higher pitches of music, so if your instrument has a higher pitch, such as a flute, violin, or saxophone, your sheet music is written in the <span class="repeat">treble clef</span>.
                    </p>
            </div>
            <div>
                    <div class="inline-block right"><img src="../assets/lesson1/bass_clef.png" height="110px" /></div>
                    <p>
                            2. The <span class="repeat">bass clef</span> notates lower pitches of music, so if your instrument has a lower pitch, such as a bassoon, tuba or cello, your sheet music is written in the <span class="repeat">bass clef</span>.
                    </p>
            </div>
            <p>You'll better understand what <span class="repeat">clefs</span> mean in the next lesson.</p>
        </div>
        <div id="korlesson" v-else>
            <img src="../assets/lesson1/staff.png" height="110px" />
            <p><span class=“keyword”>오선</span>은 5개의 평행선을 의미합니다. 평행선 사이는 일정한 간격으로 띄워져 있습니다.</p>
            <p>
                    오른쪽에 있는 <span class="keyword">음자리표</span>는 오선의 각 선과 칸이 어떤 음을 표현하는지 기준이 되는 기호입니다. 가장 대표적인 음자리표로는 <span class="keyword">높은 음자리표</span>와 <span class="keyword">낮은 음자리표</span>가 있습니다.</p>
            <div>
                    <div class="inline-block right"><img src="../assets/lesson1/treble_clef.png" height="110px" /></div>
                    <p>
                            1. <span keyword="repeat">높은 음자리표</span>는 높은 음들을 표현할 때 사용합니다. 높은 음역대의 소리를 내는 악기(예를 들어 바이올린, 플루트, 색소폰)는 <span class="repeat">높은 음자리표</span>가 그려진 악보를 사용합니다.
                    </p>
            </div>
            <div>
                    <div class="inline-block right"><img src="../assets/lesson1/bass_clef.png" height="110px" /></div>
                    <p>
                            2. <span class="repeat">낮은 음자리표</span>는 낮은 음들을 표현할 때 사용합니다. 낮은 음역대의 소리를 내는 악기(예를 들어 첼로, 베이스, 바순 등)는 <span class="repeat">낮은 음자리표</span>가 그려진 악보를 사용합니다..
                    </p>
            </div>
            <p>다음 레슨에서 <span class="repeat">음자리표</span>가 정확히 어떤 의미를 가지는지 더 잘 이해할 수 있을 것입니다.</p>
        </div>
    </div>
</template>

<script>
    import FooterBar from './FooterBar';
    import { mapState, mapGetters, mapActions } from 'vuex';

    export default {
        data () {
            return {};
        },
        components: {
            FooterBar,
        },
        computed: {
            ...mapState({
                currentLesson: 'currentLesson',
                language: 'language',
            }),
            ...mapGetters({
                getCurrentLesson: 'getCurrentLesson',
            }),
        },
        methods: {
        },
        mounted: function() {
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
