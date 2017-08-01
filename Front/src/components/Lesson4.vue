<template>
    <div class="main">
        <div id="englesson" v-if="language === 'eng'">
            <p>
                You may have seen vertical lines separating notes into little boxes. These boxes are called <span class="keyword">measures</span>.
                Each <span class="repeat">measure</span> has the same number of <span class="keyword">beats</span>,
                specified by the piece's <span class="keyword">time signature</span> at the beginning of a line.
            </p>
            <p>
                The following piece has a <span class="keyword">4/4 time signature</span>.
                This means that there are <span class="repeat">four beats</span> in every <span class="repeat">measure</span>,
                and that every <span class="repeat">quarter note</span> gets <span class="repeat">one beat</span>.
            </p>
            <img class="img" src="../assets/lesson4/4-4.png" height="120px"/>
            <p>
                On the other hand, this piece has a <span class="keyword">3/4 time signature</span>.
                You can check that each <span class="repeat">measure</span> has only <span class="repeat">three beats</span>,
                with each beat being a <span class="repeat">quarter note</span> again.
            </p>
            <img class="img" src="../assets/lesson4/3-4.png" height="120px"/>
        </div>
        <div id="korlesson" v-else>
            <p>
                    오선 위의 음표들을 여러 칸으로 분리할 수 있습니다. 이를 <span class="keyword">마디</span>라 하고, 각 <span class="keyword">마디</span> 안의 <span class="repeat">음의 길이의 합</span>은 모든 마디가 동일하게 맞춰져야 합니다.
            </p>
            <p>
                    <span class="keyword">4분의 4박자</span>는 모든 마디의 음표들 길이의 합이 4박자임을 의미합니다. 즉, 한 마디 안에서 네 박자가 연주되거나, 쉬게 됩니다.
            </p>
            <img class="img" src="../assets/lesson4/4-4.png" height="120px" />
            <p>
                    아래 악보는 위 악보와는 달리 <span class="keyword">4분의 3박자</span>로 구성되어 있습니다. 4분의 3박자에서는 한 마디안에 세 박자의 음이 나타납니다. 4분의 3박자는 주로 왈츠 등의 곡에서 사용됩니다.
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
