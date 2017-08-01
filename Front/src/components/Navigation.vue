<template>
    <div id="navigation">
        <button class="btn element"
                :class="{'passed-lesson': currentLesson > index, 'current-lesson': currentLesson == index}"
                @click="updateLesson(index); $router.push(lesson.route)"
                v-for="(lesson, index) in getLessons">
            <span v-if="index != 0">{{ index }}.</span> {{ lesson.title }}
        </button>
        <button class="btn my-btn" v-if="isEnglish" @click="changeLanguage()">
            <img src="../assets/korean.svg" height="30px"/>
            한국어
        </button>
        <button class="btn btn-secondary my-btn" v-if="!isEnglish" @click="changeLanguage()">
            <img src="../assets/english.svg" height="30px"/>
            English
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
            isEnglish: function () {
                return this.language === 'eng';
            },
        },
        methods: {
            ...mapActions([
                'updateLesson',
                'updateLocale',
            ]),
            changeLanguage: function () {
                if (this.language === 'eng') this.updateLocale('kor');
                else this.updateLocale('eng');
            },
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

    .element:focus, .my-btn:focus {
        outline: 0;
        outline-offset: 0;
    }

    .my-btn {
        margin: 20px;
        width: 210px;
        font-weight: bold;
        background-color: white;
        border: solid 2px black;
    }
</style>
