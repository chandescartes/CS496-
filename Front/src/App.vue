<template>
    <div id="app">
        <HeaderBar></HeaderBar>
        <div class="sidebar">
            <Navigation></Navigation>
        </div>
        <div class="main-content">
            <router-view></router-view>
            <FooterBar></FooterBar>
        </div>

    </div>
</template>

<script>
    import Navigation from './components/Navigation';
    import HeaderBar from './components/HeaderBar';
    import FooterBar from './components/FooterBar';

    export default {
        name: 'app',
        components: { Navigation, HeaderBar, FooterBar },
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: white;
        color: #2c3e50;
    }

    .sidebar {
        position: fixed;
        width: 250px;
    }

    .main-content {
        margin: 51px 30px 30px 280px;
        padding-top: 20px;
    }

    .keyword {
        font-weight: bold;
        color: firebrick;
    }

    .repeat {
        text-decoration: underline;
        text-decoration-color: lightgray;
    }

    .italian {
        font-style: italic;
    }
</style>
