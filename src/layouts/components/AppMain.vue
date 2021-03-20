<!--
 * @Author: dongpx
 * @Date: 2021-03-19 14:00:34
 * @LastEditTime: 2021-03-19 17:11:50
 * @LastEditors: dongpx
 * @Description: 
 * @FilePath: /laziji/src/layouts/components/AppMain.vue
-->
<template>
  <section>
    <transition name="fade">
      <slot></slot>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {

    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>