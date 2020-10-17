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

      <!-- 動物性別 -->
      <!-- <ListItem title="動物性別" :chips="sexes" /> -->

      <!-- 動物年紀 -->
      <!-- <ListItem title="動物年紀" :chips="ages" /> -->

      <!-- 動物體型 -->
      <!-- <ListItem title="動物體型" :chips="bodyTypes" /> -->

      <!-- 是否絕育 -->
      <!-- <ListItem title="是否絕育" :chips="sterilizations" /> -->

      <!-- 動物所在地 -->
      <!-- <ListItem title="動物所在地" :chips="areas" :column="true" /> -->
    </v-list>

    <v-btn class="submit-btn" color="info">
      搜尋
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import { age, area, bodyType, sex, sterilization } from '@/static/infoMaps';
import ListItem from '@/components/layouts/SearchDrawer/ListItem';

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      ages: age,
      areas: area,
      bodyTypes: bodyType,
      kinds: {
        isMultiple: false,
        selected: 'dog',
        chips: [
          {
            label: '狗',
            value: 'dog',
          },
          {
            label: '貓',
            value: 'cat',
          },
        ],
      },
      sexes: sex,
      sterilizations: sterilization,
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
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
