import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useVideoStore = defineStore('video', () => {
  let videos = ref([])
  let video =ref([])
  let favorite = ref([])
  let channels = ref([])
  const API_KEY = import.meta.env.VITE_SOME_API_KEY

  // 데이터 다운로드
  const getVideos = (query) => {
    // console.log(API_KEY);
    // axios는 Promise 객체와 동일하게 활용한다.
    axios({
      method: 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: API_KEY,
        q : query,
        part: 'snippet',
        // fields: "items(id, snippet(title))",
      }
    })
    .then((res) => {
      console.log("response = ", res);
      videos.value = res.data
    })
    .catch((err) => {
      console.error("error = ", err);
    })
  }

    // 동영상 상세조회
    const getVideoDetail = (video_id) => {
      console.log(API_KEY);
      // axios는 Promise 객체와 동일하게 활용한다.
      axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: {
          key: API_KEY,
          id : video_id,
          part: 'snippet',
        }
      })
      .then((res) => {
        console.log("response = ", res);
        video.value = res.data
      })
      .catch((err) => {
        console.error("error = ", err);
      })
    }


  return { videos, video, favorite, channels, getVideos, getVideoDetail }
}, { persist: true })
