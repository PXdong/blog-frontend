<!--
 * @Author: dongpx
 * @Date: 2021-03-19 16:26:42
 * @LastEditTime: 2021-03-20 11:50:28
 * @LastEditors: dongpx
 * @Description: 
 * @FilePath: /laziji/src/App.vue
-->
<template>
    <!-- <div id="app"> -->
        <router-view/>
    <!-- </div> -->
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'App',
        computed: {
            ...mapGetters([
                'githubUsername',
                'htmlTitle'
            ])
        },
        created() {
            this.$store.dispatch("Init")
            this.$store.dispatch("GetInfo")
            // let windowSize = this.$util.getWindowSize()
            // let pathArr = this.$route.path.split("/")
            // if (pathArr[1] == "user" && windowSize.height > windowSize.width * 1.2) {
            //     this.$router.push("/mobile/user/blog")
            // }
            // if (pathArr[1] == "mobile" && windowSize.height <= windowSize.width * 1.2) {
            //     this.$router.push("/")
            // }
        }
    }
</script>