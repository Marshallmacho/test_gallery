<template>
    <div class="page_404">
        <div class="page_404_row">
            <p class="text">404 </p>
            <p class="text">Not Found</p>
        </div>

        <div>
            <router-link to="/" class="go_back">{{'Go Back'}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageNotFound"
    }
</script>

<style scoped lang="scss">
    .page_404{
        display: flex;
        height: 100%;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
    }
    .page_404_row{
        display: flex;


    }
    ::selection { background-color: #C3CFE2; }
    .text {
        /*text-transform: uppercase;*/
        margin: 0 10px;
        background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font: {
            size: 46px;
        };
    }
    .go_back{
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
        display: block;
        background: #121019;
        margin: 0 0 0 30px;
    }

</style>