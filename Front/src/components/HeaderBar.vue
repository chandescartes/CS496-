<template>
    <nav class="navbar navbar-default navbar-fixed-top my-navbar">
        <div class="navbar-header">
            <a class="navbar-brand my-color no-hover">{{ getCurrentLesson.title }}</a>
        </div>
        <div class="navbar-collapse collapse no-hover">
            <ul class="nav navbar-nav navbar-left">
                <li><a class="no-hover" style="color:white">
                    <img height="20px" src="../assets/logo.png" style="margin-right: 10px"/>
                </a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a class="no-hover" style="color:white">
                    <span class="glyphicon glyphicon-hourglass"></span>

                    {{ getCurrentLesson.timeLeft }} <span v-if="language === 'eng'">Minutes Remaining</span><span v-else>분 남았습니다.</span>
                </a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex';

    export default {
        data () {
            return {
                remainingTime: 10,
            };
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
        methods: {
            ...mapActions([
                'updateLesson',
            ]),
        },
    };
</script>

<style scoped>
    .navbar-right {
        margin-right: 1px;
    }

    .my-navbar {
        border: 0;
        border-radius: 0;
        margin: 0;
        background-color: #9068be;
    }

    .navbar-brand {
        position: absolute;
        width: 100%;
        text-align: center;
        margin: 0 auto;
    }

    .my-color {
        color: white;
    }

    .no-hover {
        pointer-events: none;
        cursor: default;
    }
</style>
