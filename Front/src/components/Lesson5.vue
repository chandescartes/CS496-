<template>
    <div class="main">
        <p>
            A <span class="keyword">Scale</span> is a sequence of eight notes following a pattern.
            While there are many types of <span class="repeat">scales</span>,
            we will look at the <span class="keyword">major scale</span> for now.
            The <span class="repeat">major scale</span> consists of the following pattern:
        </p>
        <p class="pattern">
            Whole - Whole - Half - Whole - Whole - Whole - Half
        </p>
        <p>
            What does this mean? You can think of a <span class="keyword">half-step</span>
            as the distance between two consecutive notes on a piano (including the black keys),
            and a <span class="keyword">whole-step</span> as <span class="repeat">two half-steps</span>.
        </p>
        <img class="img" src="../assets/lesson5/steps.png" height="120px"/>
        <p>
            Now let's look at the <span class="repeat">D major scale</span>.
            Check for yourself that the <span class="repeat">D major scale</span> follows this pattern:
        </p>
        <div class="sheet-music">
            <img class="img" src="../assets/lesson5/dmajor.png" height="120px"/>
            <div class="overlap"><div class="gray" @click="playTrack('dmajor')">click to play</div></div>
        </div>

        <p>
            When we are playing a piece in D major, we are likely to play notes that are a part the <span class="repeat">scale</span>.
            However, putting a <span class="repeat">sharp</span> next to every F and C in the piece would be a nightmare for both the composer and the player!
            Therefore, we specify the <span class="keyword">key signature</span> after the <span class="repeat">clef</span>.
        </p>
        <img class="img" src="../assets/lesson5/key_signature.png" height="150px"/>
        <p>
            Now, every following F and C will be played as F# and C#, respectively.
        </p>
    </div>
</template>

<script>
    export default {
        data () {
            return {};
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

    .pattern {
        text-align: center;
        font-size: 20px;
    }

    .img {
        margin: 10px 0 0 0;
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
