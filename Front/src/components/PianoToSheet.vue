<template>
<div id="piano_to_sheet">
    <!--<button class="btn element"
                :class="{'passed-lesson': currentLesson > index, 'current-lesson': currentLesson === index}"
                @click="updateLesson(index); $router.push(lesson.route)"
                v-for="(lesson, index) in getLessons">
            {{ index }}. {{ lesson.title }}
        </button>-->
    <div id="boo">
    </div>

    <Piano @pressKey="pressKey"></Piano>
</div>
</template>

<script>
import Piano from './Piano';

export default {
    components : {
        Piano,
    },
    data() {
        return {
            VF : undefined,
            context : undefined,
            stave : undefined,
            notes : [],
            staffWidth : 780, // 오선 width
        };
    },
    methods: {
        pressKey(key) {
            this.clearSheet();

            let VF = this.VF;
            let context = this.context;
            let stave = this.stave;
            let accidental = '';

            let transKey = key[0].toLowerCase();
            if(key.length == 2) { // 임시표 없는 경우
                transKey += '/' + key[1];
            }
            else if(key.length == 3) { // 임시표 있는 경우
                transKey += key[1] + '/' + key[2];
                accidental = key[1];
            }

            if(this.notes.length + 1 > 4) {
                this.notes.shift();
            }

            let voice = new VF.Voice({num_beats: this.notes.length + 1,  beat_value: 4});
            let note = new VF.StaveNote({clef: "treble", keys: [transKey], duration: "q" });

            // 임시표가 붙으면 임시표를 추가해준다.
            if(accidental != '') {
                note = note.addAccidental(0, new VF.Accidental(accidental));
            }

            this.notes.push(note);
            voice.addTickables(this.notes);

            // Format and justify the notes to 400 pixels.
            var formatter = new VF.Formatter().joinVoices([voice]).format([voice], this.staffWidth);

            // Render voice
            voice.draw(context, stave);
        },

        clearSheet() {
            var list = document.getElementById("boo");

            // As long as <ul> has a child node, remove it
            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }

            let VexFlow = require('vexflow');
            let VF = VexFlow.Flow;

            // Create an SVG renderer and attach it to the DIV element named "boo".
            var div = document.getElementById('boo');
            var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

            // Configure the rendering context.
            renderer.resize(800, 150);
            var context = renderer.getContext();
            context.setFont("Arial", 12, "").setBackgroundFillStyle("#eed");

            // Create a stave of width 400 at position 10, 40 on the canvas.
            var stave = new VF.Stave(10, 40, this.staffWidth);

            // Add a clef and time signature.
            stave.addClef("treble").addTimeSignature("4/4");

            // Connect it to the rendering context and draw!
            stave.setContext(context).draw();

            this.stave = stave;
            this.context = context;
            this.VF = VF;
        }
    },
    mounted: function() {
        this.clearSheet();
    },
};
</script>

<style scoped>
</style>
