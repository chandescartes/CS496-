<template>
    <nav class="navbar navbar-default my-navbar">
        <div class="navbar-header">
            <a class="navbar-brand my-color no-hover"
                @click="/*updateLesson(0); $router.push('/')*/">
                {{ getCurrentLesson.title }}
            </a>
        </div>
        <div class="navbar-collapse collapse no-hover">
            <ul class="nav navbar-nav navbar-left">
                <li><a class="no-hover" style="color:white">
                    <img width="20px" src="../assets/logo.png" style="margin-right: 10px"/>A2A
                </a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a class="no-hover" style="color:white">
                    <span class="glyphicon glyphicon-hourglass"></span>
                    {{ getCurrentLesson.timeLeft }} Minutes Remaining
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
    .my-navbar {
        /*height: 70px;*/
        border: 0;
        border-radius: 0;
        margin: 0;
        background-color: #9068be;
    }

    .navbar-brand {
        position: absolute;
        width: 100%;
        /*left: 0;*/
        text-align: center;
        margin: 0 auto;
    }

    .my-color {
        color: white;
    }

    .no-hover {
        /*cursor: none;*/
    }
</style>
