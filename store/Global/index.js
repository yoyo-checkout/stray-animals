export const state = () => ({
  isLoading: false,
  isSearchDrawerOpen: false,
})

export const mutations = {
  SET_IS_LOADING(state, bool) {
    state.isLoading = bool;
  },
  SET_SEARCH_DRAWER_IS_OPEN(state, status) {
    state.isSearchDrawerOpen = status;
  },
}
