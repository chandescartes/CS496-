<template>
    <div class="main">
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
        width: 400px;
        display: inline-block;
        margin: 0 30px 0 30px;
    }
</style>
