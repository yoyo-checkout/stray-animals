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

    <v-btn class="submit-btn" color="info">
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
        selected: _.map(age, (val, key) => key),
        chips: _.map(age, (val, key) => ({ label: val, value: key })),
      },
      areas: {
        isMultiLine: true,
        selected: _.map(area, (val, key) => key),
        chips: _.map(area, (val, key) => ({ label: val, value: key })),
      },
      bodyTypes: {
        isMultiLine: false,
        selected: _.map(bodyType, (val, key) => key),
        chips: _.map(bodyType, (val, key) => ({ label: val, value: key })),
      },
      kinds: {
        isMultiLine: false,
        selected: _.map(kind, (val, key) => key),
        chips: _.map(kind, (val, key) => ({ label: val, value: key })),
      },
      sexes: {
        isMultiLine: false,
        selected: _.map(sex, (val, key) => key),
        chips: _.map(sex, (val, key) => ({ label: val, value: key })),
      },
      sterilizations: {
        isMultiLine: false,
        selected: _.map(sterilization, (val, key) => key),
        chips: _.map(sterilization, (val, key) => ({ label: val, value: key })),
      },
    };
  },
  computed: {
    ...mapState('Global', {
      isSearchDrawerOpen: state => state.isSearchDrawerOpen,
    }),
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
