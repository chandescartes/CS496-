<template>
<div id="piano_to_sheet">
    <!--<button class="btn element"
                :class="{'passed-lesson': currentLesson > index, 'current-lesson': currentLesson === index}"
                @click="updateLesson(index); $router.push(lesson.route)"
                v-for="(lesson, index) in getLessons">
            {{ index }}. {{ lesson.title }}
        </button>-->
    <div id="boo">
        <button class="btn element" @click="play(4*12 + 0, 1);">
                Click
            </button>
        <button class="btn element" @click="play(4*12 + 2, 1);">
                Click
            </button>
        <button class="btn element" @click="play(4*12 + 4, 1);">
                Click
            </button>
        <button class="btn element" @click="play(4*12 + 5, 1);">
                Click
            </button>
        <button class="btn element" @click="play(4*12 + 7, 1);">
                Click
            </button>
        <button class="btn element" @click="play(4*12 + 9, 1);">
                Click
            </button>
        <button class="btn element" @click="play(4*12 + 11, 1);">
                Click
        </button>
        <br />

        <div id="piano">
            <h1>A2A Piano</h1>
            <div class="keys">
                <div class="key" data-key="-12"></div>
                <div class="key black black1" data-key="-11"></div>
                <div class="key" data-key="-10"></div>
                <div class="key black black3" data-key="-9"></div>
                <div class="key" data-key="-8"></div>
                <div class="key" data-key="-7"></div>
                <div class="key black black1" data-key="-6"></div>
                <div class="key" data-key="-5"></div>
                <div class="key black black2" data-key="-4"></div>
                <div class="key" data-key="-3"></div>
                <div class="key black black3" data-key="-2"></div>
                <div class="key" data-key="-1"></div>
                <div class="key" data-key="0"></div>
                <div class="key black black1" data-key="1"></div>
                <div class="key" data-key="2"></div>
                <div class="key black black3" data-key="3"></div>
                <div class="key" data-key="4"></div>
                <div class="key" data-key="5"></div>
                <div class="key black black1" data-key="6"></div>
                <div class="key" data-key="7"></div>
                <div class="key black black2" data-key="8"></div>
                <div class="key" data-key="9"></div>
                <div class="key black black3" data-key="10"></div>
                <div class="key" data-key="11"></div>
                <div class="key" data-key="12"></div>
                <div class="key black black1" data-key="13"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            as: undefined,
            player: undefined,
            audioContext: undefined,
            selectedPreset: undefined,
        };
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

        getPitch(note) {
            let base = {
                'C': 0,
                'D': 2,
                'E': 4,
                'F': 5,
                'G': 7,
                'A': 9,
                'B': 11,
            };

            var picth = 0;

            let code = parseInt(base[note[0]]);
            let octave = parseInt(note[1]);
            let accidental = 0;

            if (note.length > 2) {
                accidental = note[2];

                if (accidental === '#') {
                    accidental = 1;
                } else if (accidental === 'b') {
                    accidental = -1;
                }
            }

            return octave * 12 + code + accidental;
        },

        buffering() {
            // Buffer
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 11; j++) {
                    this.play(i * 12 + j, 0);
                }
            }
        },

        play(pitch, duration) {
            this.player.queueWaveTable(this.audioContext, this.audioContext.destination, this.selectedPreset, 0, pitch, duration);
        },
    },
    mounted: function() {
        this.initPiano();
        console.log(this.getPitch('C3'));
        console.log(this.getPitch('D3#'));

        let VexFlow = require('vexflow');
        let VF = VexFlow.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById('boo');
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(750, 300);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(10, 40, 700);

        // Add a clef and time signature.
        stave.addClef("treble").addTimeSignature("4/4");

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();
    },
};
</script>

<style scoped>
strong {
    font-weight: normal;
}

a {
    text-decoration: none;
}

html,
body {
    height: 100%;
}

#content {
    min-height: 100%;
    text-align: left;
    overflow: hidden;
}

#content-inner {
    padding: 60px 0;
}

#piano {
    position: relative;
    margin: 0 auto;
    padding: 50px 40px 16px;
    width: 865px;
    background: #800000;
    border-radius: 20px;
    box-shadow: 0 1px 0 #999, 0 2px 0 #999, 0 3px 0 #999, 1px 4px 0 #999, 2px 5px 0 #999, 3px 6px 0 #999, 4px 7px 0 #999, 5px 8px 0 #999, 0 0 8px #000;
    z-index: 2;
}



/** keys */

#piano .keys {
    /*width: 1144px;*/
    width: 782px;
    padding: 2px 0 0 2px;
    overflow: hidden;
    background: #000;
    border-radius: 0 0 4px 4px;
}

.key {
    float: left;
    position: relative;
    width: 50px;
    height: 180px;
    margin: 0 2px 2px 0;
    background: #fff;
    border-radius: 0 0 4px 4px;
}

.key.pressed,
.key:active {
    background: #f4f3f3;
    box-shadow: inset 3px 2px 3px #999, inset -3px 2px 3px #999;
}

.key.black {
    width: 0;
    margin: 0;
    z-index: 2;
}

.key.black:after {
    content: "";
    position: absolute;
    top: -2px;
    left: -16px;
    display: block;
    width: 32px;
    height: 117px;
    background: #000;
    border-radius: 0 0 4px 4px;
    box-shadow: 1px 1px 0 #555, 2px 2px 0 #555;
}

.key.black1:after {
    left: -20px;
}

.key.black3:after {
    left: -16px;
}

.key.black.pressed:after,
.key.black:active:after {
    background-color: #222;
}


/* **/


/** header */

h1 {
    position: absolute;
    top: 0px;
    left: 40px;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    text-shadow: -1px -1px 0 #000
}

.opts {
    margin: 0;
    overflow: hidden;
    zoom: 1;
    width: 740px;
    height: 36px;
    line-height: 36px;
}

.opts p {
    float: left;
    margin: 0 10px 0 0;
}

.opts p:first-child {
    width: 6em;
}

.opts p .selected {
    color: #999;
    font-style: italic;
}

.toggle {
    cursor: pointer;
}

.help a {
    display: inline-block;
    padding: 0 2px;
    color: #ccc;
    font-weight: bold;
    text-decoration: none;
}

.help a:before {
    content: "_";
}

.help a:after {
    content: "_";
}


/* **/


/** below */

#below {
    position: relative;
    min-height: 100%;
    border-top: 2px solid #222;
    background: #333;
    line-height: 20px;
    color: #eee;
    text-shadow: 1px 1px 0 #000;
}

#info {
    position: absolute;
    top: -42px;
    left: 0;
    padding: 10px 20px;
    line-height: 20px;
    color: #333;
    text-shadow: none;
    cursor: pointer;
}

#top {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px 20px;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    cursor: pointer;
}

.twitter-share-button {
    position: absolute;
    bottom: 40px;
    right: 0;
}

#top:hover {
    color: red;
}

#info:hover {
    color: #eee;
    text-shadow: 1px 1px 0 #000;
    background: #333;
    border-radius: 0 10px 0 0;
}

#below-inner {
    margin: 0 auto;
    padding: 18px 0 20px;
    width: 780px;
    text-align: left;
}

#below-inner h2 {
    font-size: 16px;
    font-weight: bold;
}

#below-inner p {
    margin-bottom: 20px;
}

#below-inner a {
    color: #fff;
    font-weight: bold;
}


/* **/

.note {
    position: fixed;
    top: 20%;
    left: 30%;
    width: 40%;
    background: #111;
    background: rgba(0, 0, 0, .85);
    border-radius: 10px;
    padding: 60px 0;
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    z-index: 999;
}
</style>
