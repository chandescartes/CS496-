<template>
    <div class="main">
        <div id="englesson" v-if="language === 'eng'">
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
        <div id="korlesson" v-else>
            <p>이외에도 다양한 음악적 기호들이 존재하는데, 필수적으로 공부해둬야 합니다.</p>
            <p>
                    도돌이표로 감싸진 부분은 한 번 더 반복해서 연주해야 합니다. 한 쪽에만 도돌이표가 있을 경우, 처음부터 도돌이표까지 한 번 더 반복하고, 양쪽에 도돌이표가 있다면, 도돌이표 사이를 한 번 더 반복해야 합니다.
            </p>
            <img class="img" src="../assets/lesson8/repeat.png" height="150px" />
            <p>
                    옥타브 올림 기호인 (<span class="italian">8<sup>va</sup></span>) 로 감싸진 부분을 연주할 때는, 한 옥타브 올려서 연주해야 합니다. 유사하게 옥타브 내림 기호 (<span class="italian">8<sup>vb</sup></span>) 가 있는데, 이 부분을 연주할 때는 한 옥타브 낮춰서 연주해야 합니다.
            </p>
            <img class="img" src="../assets/lesson8/octave_higher.png" height="150px" />
            <p>
                    종종 <span class="italian">legato</span>라는 기호도 보게 될텐데요, 이는 부드럽게 이어지듯이 연주하라는 뜻입니다.
            </p>
            <img class="img" src="../assets/lesson8/legato.png" height="100px" />
            <p>
                    반면, <span class="italian">staccato</span>, 또는 음표 머리 위의 점은 스타카토라고 부르는데, 매우 짧게 튀기듯이 연주하라는 것을 의미합니다.
            </p>
            <img class="img" src="../assets/lesson8/staccato.png" height="90px" />
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

    .pattern {
        text-align: center;
        font-size: 20px;
    }

    .img {
        margin: 10px 0 0 0;
    }
</style>
