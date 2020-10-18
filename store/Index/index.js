import * as _ from 'lodash';

export const state = () => ({
  animals: [],
  filter: {
    ages: '',
    areas: '',
    bodyTypes: '',
    kinds: '',
    sexes: '',
    sterilizations: '',
  },
  page: 1,
})

export const getters = {
  getSearchStr: (state) => {
    const conds = _.filter(state.filter, tag => tag !== '');

    return conds.length ? `&${conds.join('&')}` : '';
  },
}

export const actions = {
  async getAnimals({ commit, getters }) {
    const searchStr = getters.getSearchStr;

    commit('Global/SET_IS_LOADING', true, { root: true });

    try {
      const { data } = await this.$axios.get(`/api/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=20&animal_status=OPEN${searchStr}`);

      commit('SET_ANIMALS', data);
    } catch (error) {
      console.log('Error Request.'); // eslint-disable-line
    } finally {
      commit('Global/SET_IS_LOADING', false, { root: true });
    }
  },
  async loadMoreAnimals({ commit, state, getters }) {
    const searchStr = getters.getSearchStr;

    commit('Global/SET_IS_LOADING', true, { root: true });

    try {
      const { data } = await this.$axios.get(`/api/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=20&$skip=${20 * state.page}&animal_status=OPEN${searchStr}`);

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
  SET_ANIMALS(state, data) {
    state.animals = data;
  },
  SET_FILTER(state, obj) {
    state.filter = obj;
  },
  SET_PAGE(state, val) {
    state.page = val;
  },
}
