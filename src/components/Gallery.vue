<template>
    <div class="gallery">
        <div v-for="(item,index) in items" :key="index">
            <div v-if="proId === item.itemId">
                <div class="gallery_head">
                    <div class="gh_control">
                        <router-link to="/cabinet">&#8592;</router-link>
                    </div>
                    <div class="gh_title">
                        {{item.title}}
                    </div>
                </div>

                <div class="gallery_row">
                    <div class="gallery_item">
                        <div class="gallery_zoom">
                            <img :src="mainImg" alt="">
                        </div>

                        <div class="gallery_control">
                            <img :src="src" alt="" v-for="(src, itemIndex) in item.itemsImg" :key="itemIndex"
                                 :itemNumber="itemIndex"
                                 @click="ChangeImg(src, itemIndex)"
                                 v-bind:class="{active: active === itemIndex}">
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import json from '../_helpers/itemsGallery';

    export default {
        name: "Gallery",
        data() {
            return {
                proId: Number(this.$route.params.Pid),
                items: json.product,
                mainImg: '',
                active: 0

            }
        },

        created() {
            this.findStartImg();
            this.errorRout();
        },

        methods: {

            ChangeImg(src, itemIndex) {
                this.mainImg = src;
                this.isActive(itemIndex)
            },


            isActive(itemIndex) {
                this.active = itemIndex
            },
            errorRout() {
                let that = this;
                let found = false;

                this.items.forEach((item) => {
                    if (item.itemId === Number(that.proId)) {
                        found = true
                    }
                });

                if (!found) {
                    this.$router.push('/404')
                }
            },

            findStartImg() {
                let that = this;
                this.items.forEach((item) => {
                    if (item.itemId === that.proId) {
                        return this.mainImg = item.image
                    }
                })
            }

        }
    }
</script>

<style scoped lang="scss">
    .gallery {
        .gallery_head {
            display: flex;
            padding: 36px 40px;
            .gh_control {
                a {
                    text-decoration: none;
                    font-size: 40px;
                    line-height: 20px;
                    color: black;
                    margin: 0 30px 0 0;
                }
            }
            .gh_title {
                margin: -1px 0 0;
                font-size: 19px;
            }
        }
        .gallery_row {

            .gallery_item {
                .gallery_zoom {
                    border: solid 1px rgba(193, 203, 225, 0.7);
                    width: 100%;
                    max-width: 720px;
                    height: 400px;
                    margin: 0 auto 40px;
                    border-radius: 5px;
                    /*padding: 25px 0;*/
                    text-align: center;
                    img {
                        height: 100%;
                        width: 100%;
                    }
                }
                .gallery_control {
                    text-align: center;
                    img.active {
                        opacity: 1;
                        border: solid 4px #30CFD0;
                        padding: 0;
                    }
                    img {
                        display: inline-block;
                        border-radius: 3px;
                        margin: 0 20px;
                        padding: 4px;
                        width: 70px;
                        height: 60px;
                        cursor: pointer;
                        opacity: 0.6;

                        &:hover {
                            opacity: 1;
                        }
                    }
                }

            }

        }
    }

</style>