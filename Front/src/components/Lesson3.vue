<template>
    <div class="main">
        <div id="englesson" v-if="language === 'eng'">
            <div class="inline-block img-duration"><img src="../assets/lesson3/duration.jpg" height="300px"/></div>
            <p><span class="keyword">Duration</span> is how long the note is held for. Here are the five most common ones:</p>
            <p class="list">A <span class="keyword">quarter note</span> is one beat.</p>
            <p class="list">A <span class="keyword">half note</span> is two beats, equivalent to two <span class="repeat">quarter notes</span>.</p>
            <p class="list">A <span class="keyword">whole note</span> is four beats, equivalent to four <span class="repeat">quarter notes</span>.</p>
            <p class="list">An <span class="keyword">Eighth note</span> is half of a <span class="repeat">quarter note</span>.</p>
            <p class="list">A <span class="keyword">sixteenth note</span> is half of an <span class="repeat">eighth note</span>.</p>

            <p>As you can see, adding a flag halves the <span class="repeat">duration</span>. You can keep adding flags to shorten the note.</p>
            <p><span class="keyword">Rests</span> are also important in music. The chart shows us how to notate <span class="repeat">rests</span> in various durations.</p>
            <p>Consecutive flags can be joined to create beams: </p>
            <img src="../assets/lesson3/beaming.png" height="80px"/>
            <p>A <span class="keyword">dot</span> next to a note adds another half of that note's <span class="repeat">duration</span> to it:</p>
            <img src="../assets/lesson3/dotted.png" height="80px"/>
            <p>You can also tie notes together to extend notes:</p>
            <img src="../assets/lesson3/tied.png" height="70px"/>
        </div>
        <div id="korlesson" v-else>
            <div class="inline-block img-duration"><img src="../assets/lesson3/duration.jpg" height="300px" /></div>
            <p><span class="keyword">음의 길이</span>는 음을 얼마나 길게 연주해야 하는지를 나타낸다. 크게 5개의 종류가 있는데:</p>
            <p class="list"><span class="keyword">4분 음표</span> 는 한 박.</p>
            <p class="list"><span class="keyword">2분 음표</span>는 두 박, 이 때 2분 음표는 2개의 <span class="repeat">4분 음표</span>와 길이가 같다.</p>
            <p class="list"><span class="keyword">온 음표</span>는 네 박, 이 때 온 음표는 4개의 <span class="repeat">4분 음표</span>와 길이가 같다.</p>
            <p class="list"><span class="keyword">8분 음표</span>는 <span class="repeat">4분 음표</span>의 절반, 즉 반 박자.</p>
            <p class="list"><span class="keyword">16분 음표</span>는 <span class="repeat">8분 음표</span>의 절반, 즉 반의 반박자를 나타낸다.</p>

            <p>보시다시피 줄기에 꼬리를 하나씩 달 때 마다 <span class="repeat">음의 길이</span>가 절반씩 줄어듭니다. 음의 길이를 줄이기 위해 꼬리를 계속 추가할 수 있습니다.</p>
            <p><span class="keyword">쉼표</span> 또한 음악에서 중요한 역할을 합니다. <span class="repeat">쉼표</span>는 얼마동안 연주를 쉬어야 하는지를 나타냅니다.</p>
            <p>연속되는 꼬리를 합쳐서 음표들을 이어줄 수 있습니다: </p>
            <img src="../assets/lesson3/beaming.png" height="80px" />
            <p>A <span class="keyword">점</span>을 음표의 머리 옆에 찍어주면, 그 <span class="repeat">음의 길이</span>의 절반만큼을 더 연주해야 합니다:</p>
            <img src="../assets/lesson3/dotted.png" height="80px" />
            <p>또한, 긴 길이의 음표를 붙임줄을 붙인 짧은 음 여러개로 분리할 수도 있습니다.:</p>
            <img src="../assets/lesson3/tied.png" height="70px" />
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

    .list {
        font-size: 20px;
        margin-top: 15px;
        margin-left: 30px;
    }

    .inline-block {
        display: inline-block;
    }

    .p-duration {
        width: 50%;
        float: left;
    }

    .img-duration {
        margin: 0 20px 0 20px;
        float: right;
    }
</style>
