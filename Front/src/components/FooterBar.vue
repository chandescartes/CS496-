<template xmlns:>
    <div class="footer">
        <div v-if="currentLesson !== 0" class="inline prev" @click="updateLesson(currentLesson-1); $router.push(getLessons[currentLesson].route)">
            <span class="glyphicon glyphicon-chevron-left"></span>
            Previous Lesson
        </div>

        <div v-if="currentLesson !== getLessons.length-1" class="inline next" @click="updateLesson(currentLesson+1); $router.push(getLessons[currentLesson].route)">
            Next Lesson
            <span class="glyphicon glyphicon-chevron-right"></span>
        </div>

        <div v-if="currentLesson === getLessons.length-1" class="inline next" data-toggle="modal" data-target="#myModal">
            Continue
            <span class="glyphicon glyphicon-chevron-right"></span>
        </div>

        <!--Pop-up content, not visible on load-->
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h2 class="modal-title">Congratulations!</h2>
                    </div>
                    <div class="modal-body">
                        <p>You now know how to read music.</p>
                        <p>
                            But don't stop here. Start playing <a href="https://musescore.com/sheetmusic">your favorite songs and pieces</a>,
                            or continue learning <a href="https://www.musictheory.net/">music theory</a> and
                            <a href="https://www.artofcomposing.com/how-to-compose-music-101">composition</a>.
                        </p>
                        <p>This is it from us. Thank you for taking part of our tutorial.</p>
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
</style>
