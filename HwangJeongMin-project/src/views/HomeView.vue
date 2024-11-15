<template>
    <div>
        <Search />
        
    </div>
</template>

<script setup>
import { useVideoStore } from '@/stores/video.js'
import { onMounted } from 'vue';
import Search from '@/components/Search.vue';

const store = useVideoStore()

onMounted(() => {
    return store.getVideos('son')
})
</script>

<style scoped>

</style>