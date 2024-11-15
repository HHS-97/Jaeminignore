<template>
  <h1>나중에 볼 동영상</h1>
  <div v-if="store.videos.length > 0">
    <div v-for="video in videos" :key="video.id">
      <button @click="goDetail(video)" class="btn btn-warning">상세보기</button>
      <button @click="deleteToVideo(video)" class="btn btn-danger">삭제</button>
    </div>    
  </div>
  <div v-else>
    <p>등록된 비디오 없음</p>
  </div>
</template>

<script setup>
import { useVideoStore } from '@/stores/video';

const store = useVideoStore()

const goDetail = (video) => {
  router.push({ name: 'detail'})
}

const deleteToVideo = (video) => {
  // 함수 넣기
}

</script>

<style scoped>

</style>