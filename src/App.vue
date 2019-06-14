<template>
    <div id="app">
        <RouterView/>
    </div>
</template>
<script>

    export default {
        name: 'App',
    }
</script>

<style lang="scss">
    body{
        margin: 0;
    }
    #app{
        font-family: 'Open Sans', sans-serif;
        min-height: 100vh;
        background: linear-gradient(120deg, #fff1eb 0%, #ace0f9 100%);
    }
</style>