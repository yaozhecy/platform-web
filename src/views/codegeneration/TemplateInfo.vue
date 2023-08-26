<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
      </el-aside>
      <el-main>
        <el-form :inline="true" :model="formInline">
          <el-form-item label="模版名称">
            <el-input v-model="formInline.user" placeholder="Approved by" clearable />
          </el-form-item>

          <el-form-item label="数据状态">
            <el-select v-model="formInline.region" placeholder="Activity zone" clearable>
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>

          <el-form-item label="是否可用">
            <el-date-picker v-model="formInline.date" type="date" placeholder="Pick a date" clearable />
          </el-form-item>
        </el-form>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="模版名称" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>
  
<script lang="ts" setup>
interface Tree {
  label: string
  children?: Tree[]
}

import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})


const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: '基础模版'
  },
  {
    label: '常用模版',
    children: [
      {
        label: '常用模版1'
      },
      {
        label: '常用模版2'
      },
    ],
  }
]

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

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>
  