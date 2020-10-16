export const state = () => ({
  animals: [],
  filter: {},
  page: 1,
})

export const actions = {
  async getAnimals({ commit }) {
    commit('Global/SET_IS_LOADING', true, { root: true });

    try {
      const { data } = await this.$axios.get('/api/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=20&animal_status=OPEN');

      commit('SET_ANIMALS', data);
    } catch (error) {
      console.log('Error Request.'); // eslint-disable-line
    } finally {
      commit('Global/SET_IS_LOADING', false, { root: true });
    }
  },
  async loadMoreAnimals({ commit, state }) {
    // TODO: add filter

    commit('Global/SET_IS_LOADING', true, { root: true });

    try {
      const { data } = await this.$axios.get(`/api/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=20&$skip=${20 * state.page}&animal_status=OPEN`);

      commit('ADD_ANIMALS', data);
    } catch (error) {
      console.log('Error Request.'); // eslint-disable-line
    } finally {
      commit('Global/SET_IS_LOADING', false, { root: true });
    }
  },
}

export const mutations = {
  ADD_ANIMALS(state, data) {
    state.animals = [
      ...state.animals,
      ...data,
    ];
  },
  NEXT_PAGE(state) {
    state.page++;
  },
  SET_ANIMALS(state, data) {
    state.animals = data;
  },
}
