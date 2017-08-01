<template>
    <div id="piano">
        <h1>A2A Piano</h1>
        <div class="keys">
            <div :class="getClass(i)"
                @click="play(getKey(i), 1)"
                v-for="(i, index) in makeIndexes()">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            player: undefined,
            audioContext: undefined,
            selectedPreset: undefined,
            octave: ['3', '4'], //3옥에서 4옥까지 그린다.

            keyClass : [
                'key', 'key black black1', 'key', 'key black black3', 'key', 'key', 'key black black1', 'key', 'key black black2', 'key', 'key black black3', 'key',
            ],

            keyCode : [
                'C', 'C', 'D', 'D', 'E', 'F', 'F', 'G', 'G', 'A', 'A', 'B',
            ],

            keyAccidental : [
                '', '#', '', '#', '', '', '#', '', '#', '', '#', '',
            ],
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

        makeIndexes : function() {
            let delta = parseInt(this.octave[1]) - parseInt(this.octave[0]) + 1;
            let length = 12 * delta;
            var rv = [];

            for(let i=0; i<length; i++) {
                rv.push(i);
            }

            return rv;
        },

        getKey(index) {
            let octaveIndex = parseInt(parseInt(index) / 12);
            let i = parseInt(index) % 12;
            return this.keyCode[i] + this.octave[octaveIndex] + this.keyAccidental[i];
        },

        getClass(index) {
            let i = parseInt(index) % 12;
            return this.keyClass[i];
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
            let indexes = this.makeIndexes();
            for(let i=0; i<indexes.length; i++) {
                this.play(this.getKey(i), 0);
            }
        },

        play(pitch, duration) {
            this.player.queueWaveTable(this.audioContext, this.audioContext.destination, this.selectedPreset, 0, this.getPitch(pitch), duration);
        },
    },
    mounted: function() {
        this.initPiano();
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
    margin: 0;
    padding: 50px 40px 16px;
    width: 815px;
    background: #800000;
    border-radius: 20px;
    box-shadow: 0 1px 0 #999, 0 2px 0 #999, 0 3px 0 #999, 1px 4px 0 #999, 2px 5px 0 #999, 3px 6px 0 #999, 4px 7px 0 #999, 5px 8px 0 #999, 0 0 8px #000;
    z-index: 2;
}



/** keys */

#piano .keys {
    /*width: 1144px;*/
    width: 730px;
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

/* **/


/** below */


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
