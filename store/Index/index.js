export const state = () => ({
  animals: [],
  filter: {},
  page: 1,
})

export const actions = {
  async getAnimals({ commit }) {
    // TODO: loading
    try {
      const { data } = await this.$axios.get('/api/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=20&animal_status=OPEN');

      commit('setAnimals', data);
    } catch (error) {
      console.log('Error Request.'); // eslint-disable-line
    }
  },
  async loadMoreAnimals({ commit, state }) {
    // TODO: loading
    // TODO: add filter
    try {
      alert('load');
      const { data } = await this.$axios.get(`/api/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=20&$skip=${20 * state.page}&animal_status=OPEN`);

      commit('addAnimals', data);
    } catch (error) {
      console.log('Error Request.'); // eslint-disable-line
    }
  },
}

export const mutations = {
  setAnimals(state, data) {
    state.animals = data;
  },
  addAnimals(state, data) {
    state.animals = [
      ...state.animals,
      ...data,
    ];
  },
  nextPage(state) {
    state.page++;
  },
}
