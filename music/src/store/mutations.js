import {
  SET_FULL_SCREEN,
  SET_MINI_PLAYER,
  SET_LIST_PLAYER,
  SET_IS_PLAYING,
  SET_MODE_TYPE,
  SET_SONG_DETAIL
} from './mutations-type'
export default {
  /* changeFullScreen (state, flag) {
    state.isFullScreen = flag
  } */
  [SET_FULL_SCREEN] (state, flag) {
    state.isFullScreen = flag
  },
  [SET_MINI_PLAYER] (state, flag) {
    state.isShowMiniPlayer = flag
  },
  [SET_LIST_PLAYER] (state, flag) {
    state.isListPlayer = flag
  },
  [SET_IS_PLAYING] (state, flag) {
    state.isPlaying = flag
  },
  [SET_MODE_TYPE] (state, flag) {
    state.modeType = flag
  },
  [SET_SONG_DETAIL] (state, list) {
    state.songs = list
  }
}
