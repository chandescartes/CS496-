<template>
    <div class="main">
        <div id="englesson" v-if="language === 'eng'">
            <p>
                You may have seen vertical lines separating notes into little boxes. These boxes are called measures.
                Each measure has the same number of beats, specified by the piece's time signature at the beginning of a line.
            </p>
            <p>
                The following piece has a 4/4 time signature. This means that there are four beats in every measure,
                and that every quarter note gets one beat.
            </p>
            <img class="img" src="../assets/lesson4/4-4.png" height="120px"/>
            <p>
                On the other hand, this piece has a 3/4 time signature. You can check that each measure has only three beats,
                with each beat being a quarter note again.
            </p>
            <img class="img" src="../assets/lesson4/3-4.png" height="120px"/>
        </div>
        <div id="korlesson" v-else>
            <p>
                    오선 위의 음표들을 여러 칸으로 분리할 수 있습니다. 이를 <span class="keyword">마디</span>라 하고, 각 마디 안의 음의 길이의 합은 모든 마디가 동일하게 맞춰져야 합니다.
            </p>
            <p>
                    4분의 4박자는 모든 마디의 음표들 길이의 합이 4박자임을 의미합니다. 즉, 한 마디 안에서 네 박자가 연주되거나, 쉬게 됩니다.
            </p>
            <img class="img" src="../assets/lesson4/4-4.png" height="120px" />
            <p>
                    아래 악보는 위 악보와는 달리 4분의 3박자로 구성되어 있습니다. 4분의 3박자에서는 한 마디안에 세 박자의 음이 나타납니다. 4분의 3박자는 주로 왈츠 등의 곡에서 사용됩니다.
            </p>
            <img class="img" src="../assets/lesson4/3-4.png" height="120px" />
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
    mounted: function() {
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

    .img {
        margin: 10px 0 0 0;
    }
</style>
