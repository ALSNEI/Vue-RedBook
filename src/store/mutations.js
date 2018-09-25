import * as types from './mutation-types'

export default {
    [types.SET_MASK_FLAG](state, flag){
        state.mask_flag = flag;
    },
    [types.SET_NAVSIDE_FLAG](state, flag) {
      state.navSide_flag = flag;
    },
    [types.SET_HOMETITLE_FLAG](state, flag) {
      state.homeTitle_flag = flag;
    },
    [types.SET_BOTTOMTAB_FLAG](state, flag) {
      state.bottomTab_flag = flag;
    }
}