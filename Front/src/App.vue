<template>
    <div id="app">
        <HeaderBar></HeaderBar>
        <div class="sidebar no-padding">
            <Navigation></Navigation>
        </div>
        <div class="main-content no-padding">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navigation from './components/Navigation';
    import HeaderBar from './components/HeaderBar';

    export default {
        name: 'app',
        components: { Navigation, HeaderBar },
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        background-color: white;
        color: #2c3e50;
        height: 100vh;
    }

    .sidebar {
        position: fixed;
        width: 250px;
    }

    .main-content {
        margin-left: 250px;
        margin-top: 30px;
    }

    .no-padding {
        padding: 0px;
    }

</style>
