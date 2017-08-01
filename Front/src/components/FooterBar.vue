<template xmlns:>
    <div class="footer">
        <div v-if="currentLesson !== 0" class="inline prev" @click="updateLesson(currentLesson-1); $router.push(getLessons[currentLesson].route)">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span v-if="language ==='eng'">Previous Lesson</span>
            <span v-else>이전 레슨</span>
        </div>

        <div v-if="currentLesson !== getLessons.length-1" class="inline next" @click="updateLesson(currentLesson+1); $router.push(getLessons[currentLesson].route)">
            <span v-if="language ==='eng'">Next Lesson</span>
            <span v-else>다음 레슨</span>
            <span class="glyphicon glyphicon-chevron-right"></span>
        </div>

        <div v-if="currentLesson === getLessons.length-1" class="inline next" data-toggle="modal" data-target="#myModal">
            <span v-if="language ==='eng'">Continue</span>
            <span v-else>계속</span>
            <span class="glyphicon glyphicon-chevron-right"></span>
        </div>

        <!--Pop-up content, not visible on load-->
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h2 class="modal-title">
                            <span v-if="language ==='eng'">Congratulations!</span>
                            <span v-else>축하합니다!</span>
                        </h2>
                    </div>
                    <div class="modal-body">
                        <p>
                            <span v-if="language ==='eng'">You now know how to read music.</span>
                            <span v-else>당신은 이제 악보를 읽을 수 있게 되었습니다.</span>
                        </p>
                        <p v-if="language ==='eng'">
                            But don't stop here. Start playing <a target="_blank" href="https://musescore.com/sheetmusic">your favorite songs and pieces</a>,
                            or continue learning <a target="_blank" href="https://www.musictheory.net/">music theory</a> and
                            <a href="https://www.artofcomposing.com/how-to-compose-music-101">composition</a>.
                        </p>
                        <p v-else>
                            하지만 이게 끝이 아닙니다. <a target="_blank" href="https://musescore.com/sheetmusic">your favorite songs and pieces</a>에서 당신이 가장 좋아하는 음악을 연주해보세요,
                                또는 <a target="_blank" href="https://www.musictheory.net/">music theory</a>에서 공부를 이어가세요.
                        </p>
                        <p v-if="language ==='eng'">This is it from us. Thank you for taking part of our tutorial.</p>
                        <p v-else>A2A에 관심을 가져주셔서 감사합니다.</p>
                        <div class="div-logo">
                            <img src="../assets/logo.png" class="logo"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <h6 style="float:left">By Sanghyun Lee and Chan Ryu</h6>
                        <button type="button" class="btn btn-default" @click="updateLesson(0); $router.push(getLessons[currentLesson].route)" data-dismiss="modal">Close</button>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex';

    export default {
        data () {
            return {};
        },
        computed: {
            ...mapState({
                currentLesson: 'currentLesson',
                language: 'language',
                lessons: 'lessons',
            }),
            ...mapGetters({
                getLessons: 'getLessons',
            }),
        },
        methods: {
            ...mapActions([
                'updateLesson',
                'updateLocale',
            ]),
        },
    };
</script>

<style scoped>
    .footer {
        margin-top: 40px;
        border-top: solid 1px lightgray;
    }

    .inline {
        display: inline-block;
        height: 70px;
        line-height: 4em;
        font-size: 18px;
        color: mediumslateblue;
    }

    .inline:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .prev {
        float: left;
    }

    .next {
        float: right;
    }

    p {
        font-size: 20px;
    }

    .div-logo {
        background-color: skyblue;
    }

    .logo {
        height: 100px;
        margin: 20px;
    }
</style>
