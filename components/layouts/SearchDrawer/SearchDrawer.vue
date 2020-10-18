<template>
  <v-navigation-drawer
    :value="isSearchDrawerOpen"
    width="100%"
    height="calc(100vh - 56px)"
    hide-overlay
    overlay-color="transparent"
    overlay-opacity="1"
    app
    fixed
    stateless
    temporary
  >
    <v-list>
      <!-- 動物類型 -->
      <ListItem title="動物類型" :data="kinds" />

      <v-divider />

      <!-- 動物性別 -->
      <ListItem title="動物性別" :data="sexes" />

      <v-divider />

      <!-- 動物年紀 -->
      <ListItem title="動物年紀" :data="ages" />

      <v-divider />

      <!-- 動物體型 -->
      <ListItem title="動物體型" :data="bodyTypes" />

      <v-divider />

      <!-- 是否絕育 -->
      <ListItem title="是否絕育" :data="sterilizations" />

      <v-divider />

      <!-- 動物所在地 -->
      <ListItem title="動物所在地" :data="areas" />
    </v-list>

    <v-btn
      class="submit-btn"
      color="info"
      @click="handleSearch"
    >
      搜尋
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
import * as _ from 'lodash';
import { mapState } from 'vuex';
import { age, area, bodyType, kind, sex, sterilization } from '@/static/infoMaps.js';
import ListItem from '@/components/layouts/SearchDrawer/ListItem';

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      ages: {
        isMultiLine: false,
        selected: 'all',
        chips: _.map(age, (val, key) => ({ label: val, value: key })),
      },
      areas: {
        isMultiLine: true,
        selected: 'all',
        chips: _.map(area, (val, key) => ({ label: val, value: key })),
      },
      bodyTypes: {
        isMultiLine: false,
        selected: 'all',
        chips: _.map(bodyType, (val, key) => ({ label: val, value: key })),
      },
      kinds: {
        isMultiLine: false,
        selected: 'all',
        chips: _.map(kind, (val, key) => ({ label: val, value: key })),
      },
      sexes: {
        isMultiLine: false,
        selected: 'all',
        chips: _.map(sex, (val, key) => ({ label: val, value: key })),
      },
      sterilizations: {
        isMultiLine: false,
        selected: 'all',
        chips: _.map(sterilization, (val, key) => ({ label: val, value: key })),
      },
    };
  },
  computed: {
    ...mapState('Global', {
      isSearchDrawerOpen: state => state.isSearchDrawerOpen,
    }),
  },
  methods: {
    async handleSearch() {
      const filter = {
        ages: this.isSelectedAll('ages') ? '' : `animal_age=${this.ages.selected}`,
        areas: this.isSelectedAll('areas') ? '' : `animal_area_pkid=${this.areas.selected}`,
        bodyTypes: this.isSelectedAll('bodyTypes') ? '' : `animal_bodytype=${this.bodyTypes.selected}`,
        kinds: this.isSelectedAll('kinds') ? '' : `animal_kind=${this.kinds.selected}`,
        sexes: this.isSelectedAll('sexes') ? '' : `animal_sex=${this.sexes.selected}`,
        sterilizations: this.isSelectedAll('sterilizations') ? '' : `animal_sterilization=${this.sterilizations.selected}`,
      };
      const searchStr = _.filter(filter, tag => tag !== '').join('&');

      const { data } = await this.$axios.get(`/api/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=20&animal_status=OPEN&${searchStr}`);

      console.log(data);
    },
    isSelectedAll(tag) {
      return this[tag].selected === 'all';
    },
  },
};
</script>

<style lang="scss" scoped>
.v {
  &-navigation-drawer {
    top: 56px !important;
  }

  &-list {
    margin: 0 0 50px;
  }
}

.submit-btn {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
