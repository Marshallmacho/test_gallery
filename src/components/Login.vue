<template>
    <div class="wrapper">
        <section class="sing_in">

            <div class="col_left auth_wrapper">
                <div class="auth_form">
                    <div class="form_notis">
                        <div>{{'Login: test@test.com'}}</div>
                        <div>{{'Password: test'}}</div>
                    </div>

                    <div class="form_title">
                        {{ 'Login'}}
                    </div>
                    <div class="form_item" v-bind:class="{ error: getErrorItem('username') || error.errorRest}">
                        <input type="text"
                               placeholder="Email"
                               name="username"
                               @keyup.enter="OnFormEnter"
                               v-model="username"
                               v-validate="'required'"
                        >
                        <span v-if="getError('username')" class="error_message">{{ getError('username') }}</span>
                    </div>
                    <div class="form_item" v-bind:class="{ error: getErrorItem('password') || error.errorRest}">
                        <input type="password"
                               placeholder="Password"
                               name="password"
                               class="error_input"
                               @keyup.enter="OnFormEnter"
                               v-model="password"
                               v-validate="'required'"
                        >
                        <span v-if="getError('password')" class="error_message">{{ getError('password')}}</span>
                    </div>

                    <button class="auth_btn" @click="login()">Login</button>

                </div>
            </div>

        </section>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Login",
        inject: ['$validator'],
        components: {},
        data() {
            return {
                username: '',
                password: '',
                error: {
                    errorItem: '',
                    result: '',
                    errorRest: false
                },

            }
        },
        computed: {
            ...mapGetters('auth/', [
                'isAuthenticated'
            ]),

        },
        watch: {
            handler() {
                this.getErrorItem()
            }
        },
        methods: {

            OnFormEnter() {
                this.login()
            },
            getErrorItem(field) {
                if (this.error.errorItem) {
                    return this.error.errorItem
                }
                var errorItem = '';
                this.errors.items.forEach(error => {
                    if (error.field == field) {
                        errorItem = 'error'
                    }
                })
                return errorItem
            },
            getError(field) {
                if (this.error.result) {
                    return this.error.result
                }
                var result = '';
                this.errors.items.forEach(error => {
                    if (error.field == field) {
                        result = ('Empty ' + field)
                    }
                })
                return result
            },
            login() {
                this.$validator.validateAll().then(result => {
                    if (!result) {
                        return false
                    }

                    let user = {
                        username: this.username,
                        password: this.password,
                    };
                    const requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(user)
                    };

                    return fetch(`http://localhost:4000/users/authenticate`, requestOptions)

                        .then(this.handleResponse)
                        .then(
                            user => {
                                if (user.token !== '') {
                                    localStorage.setItem('user', JSON.stringify(user));
                                    localStorage.setItem('token', JSON.stringify(user.token));
                                    document.location.reload(true);
                                }
                                return user;
                            },
                            error => {
                                let that = this
                                this.error = error
                                setTimeout(function () {
                                    that.error = {
                                        errorItem: '',
                                        result: '',
                                        errorRest: false
                                    }
                                }, 3000)
                            }
                        );
                })
            },

            handleResponse(response) {
                return response.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!response.ok) {
                        if (response.status === 401) {
                            this.logout();
                            location.reload(true);
                        }

                        const error = (data && data.message) || response.statusText;
                        return Promise.reject(error);
                    }

                    return data;
                });
            },
        },
    }
</script>

<style scoped lang="scss">
    .sing_in {
        display: flex;
        .col_left {
            max-width: 573px;
            min-width: 380px;
        }
        .col_left.auth_wrapper {
            box-sizing: border-box;
            .auth_nav {
                color: #121019;
                margin: 80px 0 45px;
                span {
                    margin: 0 24px;
                }
                a {
                    color: #121019;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: 24px;
                }
            }
            .auth_form {
                .form_title {
                    text-transform: uppercase;
                    font-size: 18px;
                    padding: 0 0 0 24px;
                    color: #121019;
                    margin: 0 0 34px;
                }
                .form_item {
                    position: relative;
                    input {
                        width: 100%;
                        display: block;
                        padding: 15px;
                        height: 50px;
                        background: none;
                        border: solid 1px #121019;
                        -webkit-border-radius: 2px;
                        -moz-border-radius: 2px;
                        border-radius: 2px;
                        box-sizing: border-box;
                        margin: 0 0 34px;
                        color: #121019;
                        font-size: 15px;
                        font-weight: 300;
                        &::-webkit-input-placeholder {
                            color: #121019;
                        }
                        &::-moz-placeholder {
                            color: #121019;
                        }
                        &:-ms-input-placeholder {
                            color: #121019;
                        }
                        &:-moz-placeholder {
                            color: #121019;
                        }
                    }
                    .form_checkbox {
                        height: 28px;
                        flex-grow: 1;
                    }
                    .form_link {
                        a {
                            color: #121019;
                        }
                    }
                }
                .form_item.form_item_flex {
                    display: flex;
                }
                .auth_btn {
                    width: 100%;
                    background: #121019;
                    color: white;
                    text-transform: uppercase;
                    height: 54px;
                    padding: 18px 0 20px;
                    border: none;
                    -webkit-border-radius: 2px;
                    -moz-border-radius: 2px;
                    border-radius: 2px;
                    margin: 34px 0 0;
                }
            }
        }
        .col_right {
            width: 573px;
        }
    }

    .form_notis {
        margin: 0 0 60px 0;
        div {
            margin: 5px 0;
        }
    }

</style>