<template>
    <el-form :model="form" label-width="120px">
        <el-form-item label="数据源名称">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="数据源类型">
            <el-select v-model="db_source" placeholder="选择数据源">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </el-form-item>
        <div v-if="db_source === 'mysql'">
            <el-form-item label="数据源地址">
            </el-form-item>
            <el-form-item label="数据库账户">
            </el-form-item>
            <el-form-item label="数据库密码">
            </el-form-item>
        </div>
        <div v-else>
            <el-upload v-model:file-list="fileList" style="margin-left: 120px;"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :on-change="handleChange">
                <el-button type="info">文件上传</el-button>
            </el-upload>
        </div>
    </el-form>
</template>
  
<script lang="ts" setup>
import { ref, reactive } from 'vue'

import type { UploadProps, UploadUserFile } from 'element-plus'

const db_source = ref('mysql')

const options = [
    {
        value: 'mysql',
        label: 'MySQL',
    },
    {
        value: 'excel',
        label: 'Excel',
    }
]

const fileList = ref<UploadUserFile[]>([
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    }
])

const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
    fileList.value = fileList.value.slice(-3)
}

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}
</script>
  