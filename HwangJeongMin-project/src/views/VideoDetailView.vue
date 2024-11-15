<template>
  <h1>{{ video.title }}</h1>
  <p>{{ video.publishTime }}</p>
  <iframe 
	width="560" height="315" 
	src="https://www.youtube.com/embed/:videoId" 
	title="YouTube video player" frameborder="0" 
	allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
  <p>{{ video.description }}</p>
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
import { onMounted } from 'vue';


const store = useVideoStore()
const route = useRoute()
const videoId = route.params.video_id

const video = store.video.snippet

store.getVideoDetail(videoId)


</script>

<style scoped>

</style>