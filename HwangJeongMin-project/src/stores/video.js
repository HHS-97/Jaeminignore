import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useVideoStore = defineStore('video', () => {
  let videos = ref([])
  let favorite = ref([])
  let channels = ref([])

  // 데이터 다운로드
  const getVideos = () => {
    // axios는 Promise 객체와 동일하게 활용한다.
    axios({
      method: 'get',
      url: ''
    })
    .then((res) => {
      console.log("response = ", res);
      videos.value = res.data
    })
    .catch((err) => {
      console.error("error = ", err);
    })
  }


  return { videos, favorite, channels, getVideos }
}, { persist: true })
