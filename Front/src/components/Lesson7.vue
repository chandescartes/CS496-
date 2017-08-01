<template>
    <div class="main">
        <p>
            We can play the same note softly or loudly and it will sound entirely different. Dynamics is how loud or quiet the sound is.</p>
        <p>Here are some common dynamic levels:</p>
        <table class="table">
            <thead>
            <tr class="italian">
                <th>pp</th>
                <th>p</th>
                <th>mp</th>
                <th>mf</th>
                <th>f</th>
                <th>ff</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>very soft</td>
                <td>soft</td>
                <td>medium soft</td>
                <td>medium loud</td>
                <td>loud</td>
                <td>very loud</td>
            </tr>
            </tbody>
        </table>
        <p>
            Changes in dynamics can also be marked anywhere in the music. For example, <span class="italian">crescendo</span>,
            or <span class="italian">cresc.</span>, means to get gradually louder,
            whereas <span class="italian">diminuendo</span>, or <span class="italian">dim.</span>, means to get gradually softer.
        </p>
        <p>
            Emphasis on individual notes is placed with an accent or the <span class="italian">sforzando</span> (<span class="italian">sf.</span>) mark.
            This note should be played significantly more strongly than others.
        </p>
        <img src="../assets/lesson7/accent.png" height="150px"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {};
        },
        mounted: () => {
            window.scrollTo(0, 0);
        },
    };
</script>

<style scoped>
    .main {
        text-align: center;
    }

    p {
        font-size: 24px;
        margin-top: 20px;
        text-align: justify;
    }

    .pattern {
        text-align: center;
        font-size: 20px;
    }

    th {
        text-align: center;
    }
</style>
