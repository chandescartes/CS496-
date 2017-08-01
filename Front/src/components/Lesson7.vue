<template>
    <div class="main">
        <div id="englesson" v-if="language === 'eng'">
            <p>
                We can play the same note softly or loudly and it will sound entirely different.
                <span class="keyword">Dynamics</span> is how loud or quiet the sound is.</p>
            <p>Here are some common <span class="repeat">dynamic</span> levels:</p>
            <table class="table">
                <thead>
                <tr class="italian">
                    <th>pp</th>
                    <th>p</th>
                    <th>mp</th>
                    <th>mf</th>
                    <th>f</th>
                    <th>ff</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>very soft</td>
                    <td>soft</td>
                    <td>medium soft</td>
                    <td>medium loud</td>
                    <td>loud</td>
                    <td>very loud</td>
                </tr>
                </tbody>
            </table>
            <p>
                Changes in <span class="keyword">dynamics</span> can also be marked anywhere in the music.
                For example, <span class="italian keyword">crescendo</span>,
                or <span class="italian keyword">cresc.</span>, means to get gradually louder,
                whereas <span class="italian keyword">diminuendo</span>, or <span class="italian keyword">dim.</span>, means to get gradually softer.
            </p>
            <p>
                Emphasis on individual notes is placed with an <span class="keyword">accent</span> or the <span
                class="italian keyword">sforzando</span>
                (<span class="italian keyword">sf.</span>) mark.
                This note should be played significantly more strongly than others.
            </p>
            <img src="../assets/lesson7/accent.png" height="150px"/>
        </div>
        <div id="korlesson" v-else>
            <p>
                우리는 같은 음이라도 약하게 연주하거나, 강하게 연주할 수 있습니다. 음악의 강약조절은 같은 음이더라도 매우 다른 효과를 연출하는데, 이를 셈여림이라고 합니다.</p>
            <p>다음은 주로 사용되는 셈여림 기호들입니다:</p>
            <table class="table">
                <thead>
                <tr class="italian">
                    <th>pp</th>
                    <th>p</th>
                    <th>mp</th>
                    <th>mf</th>
                    <th>f</th>
                    <th>ff</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>아주 여리게</td>
                    <td>여리게</td>
                    <td>조금 여리게</td>
                    <td>조금 세게</td>
                    <td>세게</td>
                    <td>매우 세게</td>
                </tr>
                </tbody>
            </table>
            <p>
                셈여림 또한 음악 어디에서든지 바꿀 수 있습니다. 예를 들어, <span class="italian">crescendo</span>, 또는 <span class="italian">cresc.</span>, 점점 세게를, <span
                class="italian">diminuendo</span>, 또는
                <span class="italian">dim.</span>, 는 점점 여리게를 의미합니다.
            </p>
            <p>
                하나의 음을 강조하는 방법에는 악센트를 사용하거나 <span class="italian">sforzando</span> (<span class="italian">sf.</span>) 를 표시하는 방법이 있습니다. 이런 기호가 표시된 음들은 다른 음보다 특히 세게 연주되어야 합니다.
            </p>
            <img src="../assets/lesson7/accent.png" height="150px"/>

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

    th {
        text-align: center;
    }
</style>
