<template>
    <el-row class="mb-4">
        <el-button type="warning" @click="queryDataSource">查询</el-button>
        <el-button type="success" @click="state.dialogFormVisible=true">新增</el-button>
    </el-row>
    <el-table :data="state.records" stripe style="width: 100%" height="600">
        <el-table-column fixed prop="fileId" label="文件ID" width="180" />
        <el-table-column prop="name" label="数据源名称" width="180" />
        <el-table-column prop="dbType" label="数据库类型" width="180" />
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column fixed="right" label="操作" width="180">
            <template #default>
                <el-button link type="primary" size="small">查看</el-button>
                <el-button link type="warning" size="small">修改</el-button>
                <el-button link type="danger" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination style="margin-top: 5px;" v-model:current-page="state.current" v-model:page-size="state.size"
        layout="->,prev, pager, next, jumper" :total="1000" />

    <el-dialog v-model="state.dialogFormVisible" title="数据源新增">
        <Edit />
    </el-dialog>
</template>
  
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import type { DataSource, QueryParams } from '@/api/datasource/types'
import { page } from '@/api/datasource/index'
import Edit from '@/views/codegeneration/datasource/edit.vue';

const state = reactive({
    dialogFormVisible: false,
    //数据源
    records: [] as DataSource[],
    toatl: 0 as number,
    current: 1,
    size: 20
})

onMounted(() => {
    queryDataSource();
});

async function queryDataSource() {
    const params = {
        current: state.current,
        size: state.size
    } as QueryParams;

    page(params).then(({ total, records }) => {
        state.toatl = total
        state.records = records
    })
}
</script>
  