<template>
  <nav>
    <div class="nav-bar">
      <h1>MyTube</h1>
      <form class="search-container" @submit.prevent="searching">
      <input
        type="text"
        v-model="query"
        placeholder="검색어를 입력하세요"
      />
      <button type="submit">찾기</button>
    </form>
    </div>
    <div v-if="videos" class="search-results">
      <h2>검색 결과</h2>
      <div class="video-list">
        <div v-for="video in videos" :key="video.id.videoId" class="video-item" @click="goDetail(video.id.videoId)">
          <img :src="video.snippet.thumbnails.default.url" alt="video thumbnail" />
          <div class="video-info">
            <h3>{{ video.snippet.title }}</h3>
            <p>{{ video.snippet.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useVideoStore } from '@/stores/video';
import { useRouter } from 'vue-router';

const query = ref('');
const store = useVideoStore()
const videos = store.videos.items
const searching = () => store.getVideos(query.value)
const router = useRouter()

const goDetail = function (videoId) {
  router.push( { path: `/${videoId}` } )
}

</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
}

.search-container {
  display: flex;
  gap: 0.5rem;
}

.search-container input {
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
}

.search-container button {
  padding: 0.5rem;
  background-color: #ff5722;
  color: white;
  border: none;
  cursor: pointer;
}

.search-results {
  padding: 1rem;
}

.video-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.video-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #ccc;
  padding: 0.5rem;
}

.video-item img {
  max-width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
}

</style>
