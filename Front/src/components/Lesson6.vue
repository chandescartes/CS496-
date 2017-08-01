<template>
    <div class="main">
        <p>
            We learned the <span class="repeat">duration</span> of individual notes,
            but how do you know how long to hold a <span class="repeat">beat</span>?
            <span class="keyword">Tempo</span> tells us this.</p>
        <p>
            We can use <span class="keyword">beats per minute</span> (BPM),
            but we can also specify a <span class="keyword">range of BPM</span> to give some freedom to the player.
        </p>
        <p>
            For example, in this excerpt from <span class="repeat">Mozart</span>'s <span class="repeat">piano sonata</span>,
            the left part is marked as <span class="keyword">Allegro</span>, or about <span class="keyword">144 quarter notes per minute</span>,
            and the right part is marked as <span class="keyword">Adagio</span>, or about <span class="keyword">60 eighth notes per minute</span>.
        </p>
        <img class="img" src="../assets/lesson6/tempo.png" height="200px"/>
        <p>These are some commonly used <span class="repeat">tempo</span> markings, and some sample pieces to give you a feeling of each.</p>
        <table class="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Range</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Largo</td>
                <td>40 - 66</td>
            </tr>
            <tr>
                <td>Adagio</td>
                <td>66 - 76</td>
            </tr>
            <tr>
                <td>Andante</td>
                <td>76 - 108</td>
            </tr>
            <tr>
                <td>Moderato</td>
                <td>108 - 120</td>
            </tr>
            <tr>
                <td>Allegro</td>
                <td>120 - 168</td>
            </tr>
            <tr>
                <td>Presto</td>
                <td>168 - 208</td>
            </tr>
            </tbody>
        </table>
        <p>
            Changes in <span class="repeat">tempo</span> can be notated anywhere in the music as well. For example, <span class="italian keyword">ritardando</span>,
            or <span class="italian keyword">rit.</span>, means to slow down gradually,
            whereas <span class="italian keyword">accelerando</span>, or <span class="italian keyword">accel.</span>, means to speed up gradually.
        </p>
    </div>
</template>

<script>
    export default {
        data () {
            return {};
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

    .table {
        width: 500px;
        margin: 0 auto;
    }

    th {
        text-align: center;
    }
</style>
