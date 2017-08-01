<template xmlns:>
    <div class="footer">
        <div v-if="currentLesson !== 0" class="inline prev" @click="updateLesson(currentLesson-1); $router.push(getLessons[currentLesson].route)">
            <span class="glyphicon glyphicon-chevron-left"></span>
            Previous Lesson
        </div>
        <div class="inline next" @click="updateLesson(currentLesson+1); $router.push(getLessons[currentLesson].route)">
            Next Lesson
            <span class="glyphicon glyphicon-chevron-right"></span>
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
</style>
