<template>
    <div class="cabinet">
        <Header/>

        <div class="items_row">
            <div class="items_block" v-for="(item, i) in items" :key="i">
                <div @click="goToGallery(item.itemId)" class="item">
                    <img :src="item.image" alt="">
                </div>
                <div class="item_description">
                    {{item.title}}
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import Header from '@/partials/Header.vue'
    import json from '../_helpers/itemsGallery';

    export default {
        name: "Cabinet",
        components: {Header},

        data() {
            return {
                items: json.product,

            }
        },
        methods: {
            goToGallery(itemId) {
                this.$router.push({name: 'gallery', params: {Pid: itemId}})
            }
        }
    }
</script>

<style scoped lang="scss">
    .cabinet {
        .items_row {
            max-width: 1366px;
            margin: 0 auto;
            padding: 0 40px;
            text-align: center;
            .items_block {
                flex-grow: 1;
                display: inline-block;
                justify-content: center;
                align-items: center;
                margin: 40px 20px;
                .item {
                    width: 440px;
                    height: 320px;
                    -webkit-border-radius: 2px;
                    -moz-border-radius: 2px;
                    border-radius: 2px;
                    border: solid 1px #121019;
                    display: block;
                    cursor: pointer;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                }
                .item_description {
                    font-size: 19px;
                    margin: 10px 0;
                }
            }
        }
    }
</style>