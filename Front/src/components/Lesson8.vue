<template>
    <div class="main">
        <p>Here are some other musical notations you should be aware of.</p>
        <p>
            The <span class="keyword">repeat sign</span> indicates a part that should be repeated.
            You should repeat from the <span class="keyword">opening repeat sign</span>, or, if there is none, from the beginning.
            Here is a case without an <span class="repeat">opening repeat sign</span>.
        </p>
        <img class="img" src="../assets/lesson8/repeat.png" height="150px"/>
        <p>
            The <span class="keyword">octave higher</span> (<span class="italian keyword">8<sup>va</sup></span>)
            sign indicates to play this part an <span class="repeat">octave</span> higher than notated.
            Similarly, the <span class="keyword">octave lower</span> (<span class="italian keyword">8<sup>vb</sup></span>)
            sign tells us to play an <span class="repeat">octave</span> lower.
        </p>
        <img class="img" src="../assets/lesson8/octave_higher.png" height="150px"/>
        <p>
            Often times, you will see notes under a curved line. This means to play them <span class="italian keyword">legato</span>,
            or smoothly and connectedly.
        </p>
        <img class="img" src="../assets/lesson8/legato.png" height="100px"/>
        <p>
            On the other hand, <span class="italian keyword">staccato</span>, marked with dots on the ends of the notes,
            tells us to play the note short and apart.
        </p>
        <img class="img" src="../assets/lesson8/staccato.png" height="90px"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {};
        },
        mounted: () => {
            window.scrollTo(0, 0);
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

    .pattern {
        text-align: center;
        font-size: 20px;
    }

    .img {
        margin: 10px 0 0 0;
    }
</style>
