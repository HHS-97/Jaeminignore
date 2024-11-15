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
import { onMounted, computed, ref } from 'vue';


const store = useVideoStore()
const route = useRoute()
const videoId = ref(route.params.video_id)
console.log(route.params.video_id)
store.getVideoDetail(videoId)
const video = store.video.snippet

</script>

<style scoped>

</style>