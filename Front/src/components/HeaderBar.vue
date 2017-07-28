<template>
    <nav class="navbar navbar-default my-navbar">
        <div class="navbar-header">
            <a class="navbar-brand my-color no-hover" href="#">Brand</a>
        </div>
        <div class="navbar-collapse collapse no-hover">
            <ul class="nav navbar-nav navbar-left">
                <li><a class="no-hover" style="color:white">Left</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a class="no-hover" style="color:white">Right</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        data () {
            return {
                remainingTime: 10,
            };
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

    .my-hover {
        cursor: none;
    }
</style>
