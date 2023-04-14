<template>
  <div>
    <head-bar></head-bar>
    <div>
      <side-bar :menu-list="menuList"></side-bar>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
// 使用setup语法糖，子组件就不用再手动注册了，会自动进行注册
import HeadBar from "./HeadBar.vue"
import SideBar from "./SideBar.vue"
import { useRouter } from 'vue-router'


const router = useRouter()
const menuList = router.getRoutes().filter(item => item.meta.isShow)


</script>