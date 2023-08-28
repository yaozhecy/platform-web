<template>
  <el-menu router class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Notification /></el-icon>
        <span>代码工具</span>
      </template>
      <el-menu-item index="/codegeneration/project">
        <el-icon><Loading /></el-icon>
        工程项目
      </el-menu-item>
      <el-menu-item index="/codegeneration/template">
        <el-icon><Memo /></el-icon>
        常用模版
      </el-menu-item>
      <el-menu-item index="/codegeneration/datasource">
        <el-icon><Memo /></el-icon>
        数据源管理
      </el-menu-item>
    </el-sub-menu>

    <el-menu-item index="about">
      <el-icon>
        <Notification />
      </el-icon>
      <template #title>代码生成</template>
    </el-menu-item>

    <el-menu-item index="index">
      <el-icon><icon-menu /></el-icon>
      <template #title>代码生产</template>
    </el-menu-item>
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