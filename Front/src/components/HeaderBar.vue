<template>
    <nav class="navbar navbar-inverse bg-primary my-navbar">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand my-header">WebSiteName</a>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li><a class="my-header">{{ remainingTime }} Minutes Left</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                remainingTime: 10,
            };
        },
    };
</script>

<style scoped>
    .my-header {
        color: white;

        pointer-events: none;
        cursor: default;
        user-select: none;
        -moz-user-select: none;
    }

    .my-navbar {
        border-radius: 0;
    }
</style>
