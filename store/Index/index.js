export const state = () => ({
  filter: {},
  animals: [],
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
}

export const mutations = {
  setAnimals(state, data) {
    state.animals = data;
  },
}
