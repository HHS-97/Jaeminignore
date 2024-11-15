<template>
    <h1>
        <RouterView />
    </h1>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useVideoStore } from '@/stores/video.js'
import { onMounted } from 'vue';

</script>

<style scoped>

</style>