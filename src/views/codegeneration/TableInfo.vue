<template>
    <el-container>
        <el-header class="demo-form-inline">
            <el-text tag="b" size="large" style="margin-right: 5px;margin-left: 10px;">关键字:</el-text>
            <el-input style="max-width: 200px;" placeholder="Please input" label="Using attributes" />
            <el-text tag="b" size="large" style="margin-right: 5px;margin-left: 10px;">关键字:</el-text>
            <el-input style="max-width: 200px;" placeholder="Please input" label="Using attributes" />
            <el-text tag="b" size="large" style="margin-right: 5px;margin-left: 10px;">关键字:</el-text>
            <el-input style="max-width: 200px;" placeholder="Please input" label="Using attributes" />
            <el-text tag="b" size="large" style="margin-right: 5px;margin-left: 10px;">关键字:</el-text>
            <el-input style="max-width: 200px;" placeholder="Please input" label="Using attributes" />
        </el-header>
        <el-main>
            <el-table :data="counter.getData" stripe style="width: 100%" border header-row-class-name="table_header_class">
                <el-table-column prop="id" label="主键" width="180" /> 
                <el-table-column prop="name" label="名称" width="180" />
                <el-table-column prop="desc" label="描述" />
            </el-table>
        </el-main>
    </el-container>
</template>
  
<script lang="ts" setup>
import { onMounted } from 'vue'
import { getUserInfo } from '@/api/manage/index'
import { projectInfoStore } from '@/stores/projectinfo'



onMounted(() => {
    getUserInfo().then(response => {
        counter.setData(response)
    }).catch((error) => { })
})

const counter = projectInfoStore()

function setData() {
    getUserInfo().then(response => {
        counter.setData(response)
    }).catch((error) => {
    })
}
</script>

<style lang="scss" scoped>
.demo-form-inline .el-input {
    --el-input-width: 100px;
}

::v-dee .table_header_class {
    background-color: aquamarine;
}
</style>