<script setup lang="ts">
</script>

<template>

        <el-container>
            <el-main>
                <RouterView/>
            </el-main>
        </el-container>
</template>

<style scoped>
.app-main{
    background-color: aqua;
    height: calc(100vh - var(--ep-menu-item-height) - 10px);
}

</style>
