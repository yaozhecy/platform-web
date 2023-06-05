<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
    @close="handleClose">

    <app-link to="about">
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <template #title>代码生成</template>
      </el-menu-item>
    </app-link>

    <app-link to="index">
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>代码生产</template>
      </el-menu-item>
    </app-link>
  </el-menu>
</template>


<script lang="ts" setup>
import { ref } from "vue";
import {
  Menu as IconMenu
} from "@element-plus/icons-vue";
import AppLink from './Link.vue';

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
};
const handleClose = (key: string, keyPath: string[]) => {
};
</script>