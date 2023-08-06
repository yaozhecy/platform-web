<template>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="项目名称" width="180" />
      <el-table-column prop="name" label="项目描述" width="180" />
      <el-table-column prop="address" label="所属人" />
    </el-table>
  </template>
  
  <script lang="ts" setup>
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
  