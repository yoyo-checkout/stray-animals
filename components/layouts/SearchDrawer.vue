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
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            動物類型
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-chip-group class="chip-group">
              <v-chip color="pink lighten-4">
                全部
              </v-chip>
              <v-chip color="pink lighten-4">
                狗
              </v-chip>
              <v-chip color="pink lighten-4">
                貓
              </v-chip>
            </v-chip-group>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- 動物性別 -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            動物性別
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-chip-group class="chip-group">
              <v-chip color="pink lighten-4">
                全部
              </v-chip>
              <v-chip color="pink lighten-4">
                公
              </v-chip>
              <v-chip color="pink lighten-4">
                母
              </v-chip>
            </v-chip-group>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- 動物年紀 -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            動物年紀
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-chip-group class="chip-group">
              <v-chip color="pink lighten-4">
                全部
              </v-chip>
              <v-chip color="pink lighten-4">
                幼年
              </v-chip>
              <v-chip color="pink lighten-4">
                成年
              </v-chip>
            </v-chip-group>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- 動物體型 -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            動物體型
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-chip-group class="chip-group">
              <v-chip color="pink lighten-4">
                全部
              </v-chip>
              <v-chip color="pink lighten-4">
                小型
              </v-chip>
              <v-chip color="pink lighten-4">
                中型
              </v-chip>
              <v-chip color="pink lighten-4">
                大型
              </v-chip>
            </v-chip-group>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- 是否絕育 -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            是否絕育
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-chip-group class="chip-group">
              <v-chip color="pink lighten-4">
                全部
              </v-chip>
              <v-chip color="pink lighten-4">
                是
              </v-chip>
              <v-chip color="pink lighten-4">
                否
              </v-chip>
            </v-chip-group>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- 動物所在地 -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            動物所在地
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-chip-group
              class="chip-group"
              column
            >
              <v-chip color="pink lighten-4">
                全部
              </v-chip>
              <v-chip v-for="(area, i) in areas" :key="i" color="pink lighten-4">
                {{ area }}
              </v-chip>
            </v-chip-group>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-btn class="submit-btn" color="info">
      搜尋
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import { area } from '@/static/infoMaps';

export default {
  data() {
    return {
      areas: area,
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
