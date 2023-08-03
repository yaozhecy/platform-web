<template>
    <el-button type="primary" @click="greet">Primary</el-button>
    <el-calendar v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {getUserInfo} from '@/api/manage/index.ts'

const value = ref(new Date())

function greet() {
  console.log(getUserInfo())
}
</script>