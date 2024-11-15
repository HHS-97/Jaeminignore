<template>
    <nav>
      <div class="nav-bar">
        <h1>MyTube</h1>
        <div class="search-container">
          <input
            type="text"
            v-model="query"
            @keyup.enter="searchVideos"
            placeholder="검색어를 입력하세요"
          />
          <button @click="searchVideos">찾기</button>
        </div>
      </div>
      <div v-if="videos.length" class="search-results">
        <h2>검색 결과</h2>
        <div class="video-list">
          <div v-for="video in videos" :key="video.id.videoId" class="video-item">
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
  import { ref } from 'vue';
  import axios from 'axios';
  
  const query = ref('');
  const videos = ref([]);
  
  const searchVideos = async () => {
    if (query.value.trim() === '') return;
  
    const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // 여기에 본인의 YouTube API 키를 입력하세요
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query.value}&type=video&maxResults=6&key=${API_KEY}`;
  
    try {
      const response = await axios.get(URL);
      videos.value = response.data.items;
    } catch (error) {
      console.error('YouTube API 요청 오류:', error);
    }
  };
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
  