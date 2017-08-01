<template>
    <div id="navigation">
        <button class="btn element"
                :class="{'passed-lesson': currentLesson > index, 'current-lesson': currentLesson == index}"
                @click="updateLesson(index); $router.push(lesson.route)"
                v-for="(lesson, index) in getLessons">
            <span v-if="index != 0">{{ index }}.</span> {{ lesson.title }}
        </button>
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
    #navigation {
        height: 100vh;
        #background-color: #ededed;
        background-color: white;
        border-right: solid lightgray 1px;
    }

    .element {
        width: 100%;
        height: 50px;
        background-color: transparent;
        font-family: SansSerif;
        font-size: 15px;
        border-radius: 0;
        padding-left: 20px;
        text-align: left;
    }

    .passed-lesson {
        background-color: #e1e8f0;
        color: darkgray;
    }

    .current-lesson {
        background-color: #dde0e4;
        font-weight: bold;
        border-top: solid 2px lightgray;
        border-bottom: solid 2px lightgray;
    }

    .element:focus {
        outline: 0;
        outline-offset: 0;
    }
</style>
