<template>
    <el-container>
        <el-main>
            <RouterView />
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-main {
    background-color: aqua;
    height: calc(100vh - var(--ep-menu-item-height) - 10px);
}
</style>
