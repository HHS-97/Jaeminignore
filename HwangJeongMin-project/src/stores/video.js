import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useVideoStore = defineStore('video', () => {
  let videos = ref([])
  let video = ref([])
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
        type: 'video',
        key: API_KEY,
        q : query,
        part: 'snippet',
        // fields: "items(id, snippet(title))",
      }
    })
    .then((res) => {
      console.log("response = ", res);
      videos.value = res.data.items
      console.log(videos.value)
    })
    .catch((err) => {
      console.error("error = ", err);
    })
  }

    // 동영상 상세조회
    const getVideoDetail = (video_id) => {
      video.value = videos.value.find((idx) => {
        console.log(idx.id.videoId)
        if (idx.id.videoId === video_id.value) {
          console.log('완료')
          return true
        }else {
          console.log('미완료')
          return false
        }
      })
    }

    // 나중에 볼 동영상에 추가하기
    const addToVideo = (video) => {
      const index = favorite.value.findIndex((idx) => idx.id.videoId == video_id)
      if (index === -1) {
        alert("동영상이 추가되었습니다.")
        favorite.value.push(video)
      } else {
        alert("이미 추가된 영상입니다.")
      }
    }

    // 나중에 볼 동영상에서 삭제하기
    const deleteToVideo = (videoId) => {
      const index = favorite.value.findIndex((idx) => idx.id.videoId == videoId)
      if (index !== -1) {
        favorite.value.splice(index, 1)
      }
    }

  return { videos, video, favorite, channels, getVideos, getVideoDetail, addToVideo, deleteToVideo }
}, { persist: true })
