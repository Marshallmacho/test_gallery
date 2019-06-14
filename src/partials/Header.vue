<template>
    <div class="header">
        <span>{{'Hello '}}</span>
        <span>{{user.firstName}} {{user.lastName}}</span>
        <img src="" alt="">
        <router-link to="/logout" class="logout">{{'Logout'}}</router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Header",
        computed: {
            ...mapState({
                user: state => state.auth.user
            })
        },
        data() {
            return {}
        },
        methods: {
            logout() {

            }
        }
    }
</script>

<style scoped>
    .header {
        border-bottom: solid 1px rgba(193, 203, 225, 0.7);
        padding: 40px;
        font-size: 19px;
    }

    .logout {
        float: right;
        color: #fff;
        background: #121019;
        padding: 10px 40px;
        font-size: 16px;
        text-decoration: none;
        border-radius: 5px;
        border: 0;
        cursor: pointer;
        position: relative;
        margin: -9px 0 0 0;
        display: block;
    }
</style>