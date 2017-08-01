<template>
    <div class="main">
        <div id="englesson" v-if="language === 'eng'">
            <p><span class="keyword">Pitch</span> is the highness or lowness of a note. There are seven different <span class="repeat">pitches</span>, from A to G.</p>
            <img src="../assets/lesson2/treble_clef.png" class="inline-block"/>
            <img src="../assets/lesson2/bass_clef.png" class="inline-block"/>
            <p>As we mentioned earlier, notes are read differently based on the <span class="repeat">clef</span>.</p>
            <p>
                Aside from the notes we specified above, you can move up and down the <span class="repeat">staff</span> to change the <span class="repeat">pitch</span> of the note.
                Once you go beyond the five lines, you should start adding more lines to notate the <span class="repeat">pitch</span>
                (just like the low C in the <span class="repeat">treble clef</span> or the high C in the <span class="repeat">bass clef</span>).
            </p>
            <p><span class="keyword">Accidentals</span> are placed to the left of notes and also change the <span class="repeat">pitch</span>.</p>
            <p>The <span class="keyword">flat</span> (<span class="keyword">♭</span>) lowers the original <span class="repeat">pitch</span> by a <span class="repeat">half-step</span>,
                and the <span class="keyword">sharp</span> (<span class="keyword">#</span>) raises it by a <span class="repeat">half-step</span>.</p>
            <p><span class="repeat">Steps</span> will be further explained in Step 5: Scale.</p>
        </div>
        <div id="korlesson" v-else>
            <p><span class="keyword">음의 높이</span>는 음이 높은 소리를 내는지, 낮은 소리를 내는지를 결정합니다. 총 7개의 음 높이가 있는데, 순서대로 <span class="repeat">도,레,미,파,솔,라,시,도</span> 입니다.</p>
            <img src="../assets/lesson2/treble_clef.png" class="inline-block" />
            <img src="../assets/lesson2/bass_clef.png" class="inline-block" />
            <p>이전에 언급했듯이, 음표는 <span class="repeat">음자리표</span>에 따라 다르게 읽습니다.</p>
            <p>위에 그려진 음들 말고도, <span class="repeat">오선</span>에는 다양한 음이 표시될 수 있습니다. 단, 오선 밖에 음을 표시할 경우에는 <span class="repeat">높은 음자리표</span>의 도, 또는 <span class="repeat">낮은 음자리표</span>의 높은 도에 그려진 것 처럼 추가로 선을 그려줘야 합니다.</p>
            <p><span class="keyword">임시표</span>는 <span class="repeat">음의 높이</span>를 바꿔주는 기호입니다. 임시표는 음표의 왼쪽에 그려줍니다.</p>
            <p><span class="keyword">플랫</span> (<span class="keyword">♭</span>)은 원래 음보다 <span class="repeat">반음</span> 내려주고, <span class="keyword">샾</span> (<span class="keyword">#</span>)은 원래 음보다 <span class="repeat">반음</span> 올려줍니다.</p>
            <p><span class="repeat">반음</span>에 대해서는 레슨 5에서 좀 더 자세히 공부할 수 있습니다.</p>
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
        computed: {
            ...mapState({
                currentLesson: 'currentLesson',
                language: 'language',
            }),
            ...mapGetters({
                getCurrentLesson: 'getCurrentLesson',
            }),
        },
        components: {
            FooterBar,
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
        width: 400px;
        display: inline-block;
        margin: 0 30px 0 30px;
    }
</style>
