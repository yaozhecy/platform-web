<template>
    <el-table :data="counter.getData" stripe style="width: 100%">
        <el-table-column prop="id" label="主键" width="180" />
        <el-table-column prop="name" label="名称" width="180" />
        <el-table-column prop="desc" label="描述" />
    </el-table>
</template>
  
<script lang="ts" setup>
import { onMounted } from 'vue'
import { getUserInfo } from '@/api/manage/index'
import { projectInfoStore } from '@/stores/projectinfo'

onMounted(()=>{
    getUserInfo().then(response => {
        counter.setData(response)
    }).catch((error) => {})
})

const counter = projectInfoStore()

function setData() {
    getUserInfo().then(response => {
        counter.setData(response)
    }).catch((error) => {
    })
}
</script>
  