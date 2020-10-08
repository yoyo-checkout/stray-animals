export const state = () => ({
  isSearchDrawerOpen: false,
})

export const mutations = {
  openSearchDrawer(state) {
    state.isSearchDrawerOpen = true;
  },

  closeSearchDrawer(state) {
    state.isSearchDrawerOpen = false;
  },
}
