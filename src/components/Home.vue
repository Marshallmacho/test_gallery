<template>
    <div class="start_page">
        <router-link to="/login" class="start_btn">Do it!</router-link>
    </div>
</template>

<script>
    export default {
        name: 'StartPage',
        props: {
            msg: String
        }
    }
</script>

<style scoped lang="scss">
    .start_page {
        position: relative;
        display: flex;
        overflow: hidden;
        padding: 4rem 1.5rem;
        width: 100%;
        box-sizing: border-box;
        height: 100%;
        flex-direction: row;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        .start_btn {
            color: #fff;
            padding: 30px 50px;
            font-size: 19px;
            border-radius: 5px;
            border: 0;
            flex-direction: row;
            text-decoration: none;
            align-items: center;
            cursor: pointer;
            position: relative;
            margin: 0;
            display: block;
        }
    }


</style>
