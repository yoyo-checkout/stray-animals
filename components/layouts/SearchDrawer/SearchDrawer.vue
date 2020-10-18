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
import { mapState } from 'vuex';
import ListItem from '@/components/layouts/SearchDrawer/ListItem';

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      ages: {
        isMultiLine: false,
        selected: ['child', 'adult'],
        chips: [
          {
            label: '幼年',
            value: 'child',
          },
          {
            label: '成年',
            value: 'adult',
          },
        ],
      },
      areas: {
        isMultiLine: true,
        selected: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        chips: [
          {
            label: '台北市',
            value: '2',
          },
          {
            label: '新北市',
            value: '3',
          },
          {
            label: '基隆市',
            value: '4',
          },
          {
            label: '宜蘭縣',
            value: '5',
          },
          {
            label: '桃園縣',
            value: '6',
          },
          {
            label: '新竹縣',
            value: '7',
          },
          {
            label: '新竹市',
            value: '8',
          },
          {
            label: '苗栗縣',
            value: '9',
          },
          {
            label: '台中市',
            value: '10',
          },
          {
            label: '彰化縣',
            value: '11',
          },
          {
            label: '南投縣',
            value: '12',
          },
          {
            label: '雲林縣',
            value: '13',
          },
          {
            label: '嘉義縣',
            value: '14',
          },
          {
            label: '嘉義市',
            value: '15',
          },
          {
            label: '台南市',
            value: '16',
          },
          {
            label: '高雄市',
            value: '17',
          },
          {
            label: '屏東縣',
            value: '18',
          },
          {
            label: '花蓮縣',
            value: '19',
          },
          {
            label: '台東縣',
            value: '20',
          },
          {
            label: '澎湖縣',
            value: '21',
          },
          {
            label: '金門縣',
            value: '22',
          },
          {
            label: '連江縣',
            value: '23',
          },
        ],
      },
      bodyTypes: {
        isMultiLine: false,
        selected: ['big', 'medium', 'small'],
        chips: [
          {
            label: '大型',
            value: 'big',
          },
          {
            label: '中型',
            value: 'medium',
          },
          {
            label: '小型',
            value: 'small',
          },
        ],
      },
      kinds: {
        isMultiLine: false,
        selected: ['dog', 'cat'],
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
      sexes: {
        isMultiLine: false,
        selected: ['f', 'm'],
        chips: [
          {
            label: '母',
            value: 'f',
          },
          {
            label: '公',
            value: 'm',
          },
        ],
      },
      sterilizations: {
        isMultiLine: false,
        selected: ['f', 't'],
        chips: [
          {
            label: '否',
            value: 'f',
          },
          {
            label: '是',
            value: 't',
          },
        ],
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
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
