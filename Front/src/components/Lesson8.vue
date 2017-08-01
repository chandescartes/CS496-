<template>
    <div class="main">
        <p>Here are some other musical notations you should be aware of.</p>
        <p>
            The repeat sign indicates a part that should be repeated.
            You should repeat from the opening repeat sign, or, if there is none, from the beginning.
            Here is a case without an opening repeat sign.
        </p>
        <img class="img" src="../assets/lesson8/repeat.png" height="150px"/>
        <p>
            The octave higher (<span class="italian">8<sup>va</sup></span>) sign indicates to play this part an octave higher than notated.
            Similarly, the octave lower (<span class="italian">8<sup>vb</sup></span>) sign tells us to play an octave lower.
        </p>
        <img class="img" src="../assets/lesson8/octave_higher.png" height="150px"/>
        <p>
            Often times, you will see notes under a curved line. This means to play them <span class="italian">legato</span>,
            or smoothly and connectedly.
        </p>
        <img class="img" src="../assets/lesson8/legato.png" height="100px"/>
        <p>
            On the other hand, <span class="italian">staccato</span>, marked with dots on the ends of the notes,
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
