<template>
    <div class="auth">
        <Login/>
    </div>
</template>

<script>
    import Login from '@/components/Login.vue'

    export default {
        name: 'LoginPage',
        components: {
            Login
        }
    }
</script>

<style scoped lang="scss">
    .auth {
        min-width: 575px;
        display: flex;
        position: relative;
        overflow: hidden;
        padding: 4rem 1.5rem;
        width: 100%;
        box-sizing: border-box;
        height: 100%;
        flex-direction: row;
        min-height: 100vh;
        align-items: center;
        justify-content: center;

    }

</style>