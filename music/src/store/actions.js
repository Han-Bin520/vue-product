import {
  SET_FULL_SCREEN,
  SET_MINI_PLAYER,
  SET_LIST_PLAYER,
  SET_IS_PLAYING,
  SET_MODE_TYPE,
  SET_SONG_DETAIL
} from './mutations-type'
import { getSongDetail } from '../api/index'
export default {
  /* setFullScreen ({ commit }, flag) {
    commit('changeFullScreen', flag)
  } */
  setFullScreen ({ commit }, flag) {
    commit(SET_FULL_SCREEN, flag)
  },
  setMiniPlayer ({ commit }, flag) {
    commit(SET_MINI_PLAYER, flag)
  },
  setListPlayer ({ commit }, flag) {
    commit(SET_LIST_PLAYER, flag)
  },
  setIsPlaying ({ commit }, flag) {
    commit(SET_IS_PLAYING, flag)
  },
  setModeType ({ commit }, flag) {
    commit(SET_MODE_TYPE, flag)
  },
  async setSongDetail ({ commit }, ids) {
    const result = await getSongDetail({ ids: ids.join(',') })
    const list = []
    result.songs.forEach(function (value) {
      const obj = {}
      obj.name = value.name
      let singer = ''
      value.ar.forEach(function (item, index) {
        if (index === 0) {
          singer = item.name
        } else {
          singer += '-' + item.name
        }
      })
      obj.singer = singer
      obj.picUrl = value.al.picUrl
      list.push(obj)
    })
    commit(SET_SONG_DETAIL, list)
  }
}
