<template>
  <h1>{{  }}</h1>
  <p>{{  }}</p>
  <iframe src="" frameborder="0"></iframe>
  <p>{{  }}</p>
  <div>
    <button class="btn btn-primary">동영상 저장</button>
  </div>
  <div>
    <button class="btn btn-primary">저장 취소</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useVideoStore } from '@/stores/video';

const store = useVideoStore()
const route = useRoute()
// const videoId = 

// const video = 

</script>

<style scoped>

</style>