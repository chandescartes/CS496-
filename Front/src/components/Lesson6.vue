<template>
    <div class="main">
        <div id="englesson" v-if="language === 'eng'">
            <p>
                We learned the <span class="repeat">duration</span> of individual notes,
                but how do you know how long to hold a <span class="repeat">beat</span>?
                <span class="keyword">Tempo</span> tells us this.</p>
            <p>
                We can use <span class="keyword">beats per minute</span> (BPM),
                but we can also specify a <span class="keyword">range of BPM</span> to give some freedom to the player.
            </p>
            <p>
                For example, in this excerpt from <span class="repeat">Mozart</span>'s <span
                class="repeat">piano sonata</span>,
                the left part is marked as <span class="keyword">Allegro</span>, or about <span class="keyword">144 quarter notes per minute</span>,
                and the right part is marked as <span class="keyword">Adagio</span>, or about <span class="keyword">60 eighth notes per minute</span>.
            </p>
            <img class="img" src="../assets/lesson6/tempo.png" height="200px"/>
            <p>These are some commonly used <span class="repeat">tempo</span>
                markings, and some sample pieces to give you a feeling of each.</p>
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
                Changes in <span class="repeat">tempo</span> can be notated anywhere in the music as well. For example, <span
                class="italian keyword">ritardando</span>,
                or <span class="italian keyword">rit.</span>, means to slow down gradually,
                whereas <span class="italian keyword">accelerando</span>, or <span class="italian keyword">accel.</span>, means to speed up gradually.
            </p>
        </div>
        <div id="korlesson" v-else>
            <p>
                음의 길이에 대해 공부했던 것 기억나나요? 하지만 우리는 한 박자가 정확히 얼만큼의 시간을 의미하는지 배우지 않았습니다. 오늘 템포를 공부한다면 한 박자가 정확히 얼마만큼의 시간을 의미하는지 알 수 있을 것입니다.
            <p>
                템포로는 분당 박자 수(BPM)을 사용할 수 있지만, 연주자에게 좀 더 자유로운 연주를 보장하기 위해 정확한 BPM이 아닌, 좀 더 넓은 템포 범위를 제시하기도 합니다.
            </p>
            <p>
                아래의 모차르트 소나타를 예로 들어봅시다. 왼쪽 악보에는 1분 당 144박을 연주하거나, Allegro로 연주하라고 적혀있습니다. 오른쪽 악보에는 분당 60 반박을 연주하거나, Adagio로 연주하라고 적혀있습니다.
            </p>
            <img class="img" src="../assets/lesson6/tempo.png" height="200px"/>
            <p>다음은 주로 사용되는 템포들입니다.</p>
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
                템포는 음악 어디에서든 바뀔 수 있습니다. 예를들어, <span class="italian">ritardando</span>, 또는 <span
                class="italian">rit.</span>, 는 점점 느리게를 의미합니다. 또한, <span class="italian">accelerando</span>, 또는
                <span class="italian">accel.</span>, 은 점점 빠르게를 의미합니다..
            </p>

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
        mounted: function () {
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

    .table {
        width: 500px;
        margin: 0 auto;
    }

    th {
        text-align: center;
    }
</style>
