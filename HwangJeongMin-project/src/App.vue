<template>
    <h1>
        1
    </h1>
</template>

<script setup>
import Navigations from './components/Navigations.vue';
import { RouterLink, RouterView } from 'vue-router';
import { useVideoStore } from '@/stores/video.js'
import { onMounted } from 'vue';

const store = useVideoStore()

onMounted(() => {
    return store.getVideos()
})
</script>

<style scoped>

</style>