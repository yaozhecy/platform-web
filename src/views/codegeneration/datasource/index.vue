<template>
    <el-row class="mb-4">
        <el-button type="success" @click="dialogFormVisible = true">新增</el-button>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="名称" width="180" />
        <el-table-column prop="name" label="类型" width="180" />
        <el-table-column prop="address" label="创建时间" />
        <el-table-column fixed="right" label="操作" width="180">
            <template #default>
                <el-button link type="primary" size="small">查看</el-button>
                <el-button link type="warning" size="small">修改</el-button>
                <el-button link type="danger" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-dialog v-model="dialogFormVisible" title="数据源新增">
        <Edit/>
    </el-dialog>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import Edit from '@/views/codegeneration/datasource/edit.vue';

const dialogFormVisible = ref(false)

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>
  