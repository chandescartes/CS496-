<template>
    <div class="main">
        <div id="englesson" v-if="language === 'eng'">
            <p>
                Scales is a sequence of eight notes following a pattern.
                While there are many types of scales, we will look at the major scale for now.
                The major scale consists of the following pattern:
            </p>
            <p class="pattern">
                Whole - Whole - Half - Whole - Whole - Whole - Half
            </p>
            <p>
                What does this mean? You can think of a half-step as the distance between two consecutive notes on a piano (including the black keys),
                and a whole-step as two half-steps.
            </p>
            <img class="img" src="../assets/lesson5/steps.png" height="120px"/>
            <p>
                Now let's look at the D major scale. Check for yourself that the D major scale follows this pattern:
            </p>
            <img class="img" src="../assets/lesson5/dmajor.png" height="120px"/>
            <p>
                When we are playing a piece in D major, we are likely to play notes that are a part the scale.
                However, putting a sharp next to every F and C in the piece would be a nightmare for both the composer and the player!
                Therefore, we specify the key signature after the clef.
            </p>
            <img class="img" src="../assets/lesson5/key_signature.png" height="150px"/>
            <p>
                Now, every following F and C will be played as F# and C#, respectively.
            </p>
        </div>
        <div id="korlesson" v-else>
            <p>
                    음계는 8개의 음이 이어지는 것을 말합니다. 음악에는 대단히 많은 종류의 음계가 존재하는데, 가장 대표적인 것이 장음계입니다. 장음계는 다음과 같은 패턴을 가지고 있습니다:
            </p>
            <p class="pattern">
                    온음 - 온음 - 반음 - 온음 - 온음 - 온음 - 반음
            </p>
            <p>
                    온음과 반음은 무슨 뜻일까요? 온음은 피아노 건반에서 검은 건반을 포함했을 때 흰 건반과 흰 건반 사이의 거리를 말합니다. 이 때 미와 파 사이는 검은 건반이 없으므로, 반음이 됩니다. 온음은 2개의 반음으로 이루어져 있습니다.
            </p>
            <img class="img" src="../assets/lesson5/steps.png" height="120px" />
            <p>
                    이제 라(레) 장조 장음계를 살펴봅시다. 아래의 라 장조 장음계가 위와 같은 패턴을 보이는지 체크해보세요!
            </p>
            <img class="img" src="../assets/lesson5/dmajor.png" height="120px" />
            <p>
                    우리는 라 장조로 작곡된 음악을 연주할 때, 무의식적으로 라장조 장음계를 연주하게 됩니다. 하지만 반음마다 샾과 플랫을 그려줘야 한다면 작곡가나, 연주자 모두 지치겠죠? 그래서 음자리표 옆에 어떤 음을 반음 올리거나, 내려야 하는지 조표로 적어주게 됩니다.
            </p>
            <img class="img" src="../assets/lesson5/key_signature.png" height="150px" />
            <p>
                    따라서, 라 장조로 된 곡을 연주할 때는 파와 도를 파#, 도#으로 연주해야 합니다.
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
