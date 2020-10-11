<template>
  <div>
    <v-row
      no-gutters
    >
      <v-col
        v-for="(animal, index) in animals"
        :key="index"
        cols="6"
        md="4"
        lg="3"
        class="pa-3"
      >
        <v-card hover>
          <v-img
            :src="animal.album_file"
            aspect-ratio="1"
          >
            <v-chip-group class="chip-group">
              <v-chip v-if="animal.animal_sex === 'F'" color="pink lighten-4">
                {{ sexMap[animal.animal_sex] }}
              </v-chip>
              <v-chip v-if="animal.animal_sex === 'M'" color="blue lighten-4">
                {{ sexMap[animal.animal_sex] }}
              </v-chip>
              <v-chip v-if="animal.animal_bodytype" color="teal lighten-4">
                {{ bodyTypeMap[animal.animal_bodytype] }}
              </v-chip>
              <v-chip v-if="animal.animal_age" color="brown lighten-4">
                {{ ageMap[animal.animal_age] }}
              </v-chip>
              <v-chip v-if="animal.animal_colour">
                {{ animal.animal_colour }}
              </v-chip>
            </v-chip-group>
          </v-img>

          <v-card-text>
            <div class="d-flex align-center">
              <v-icon>mdi-map-marker</v-icon>
              <span
                class="blue--text map-link"
                @click="openGoogleMap(animal.shelter_name)"
              >
                {{ areaMap[animal.animal_area_pkid] }}
              </span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'default',
  // async fetch ({ $axios }) {
  //   const data = await $axios.$get('http://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=5&$skip=0&$filter=');
  //
  //   console.log(data);
  // },
  data () {
    return {
      sexMap: {
        M: '公',
        F: '母',
      },
      bodyTypeMap: {
        SMALL: '小型',
        MEDIUM: '中型',
        BIG: '大型',
      },
      ageMap: {
        CHILD: '幼年',
        ADULT: '成年',
      },
      areaMap: {
        2: '台北市',
        3: '新北市',
        4: '基隆市',
        5: '宜蘭縣',
        6: '桃園縣',
        7: '新竹縣',
        8: '新竹市',
        9: '苗栗縣',
        10: '台中市',
        11: '彰化縣',
        12: '南投縣',
        13: '雲林縣',
        14: '嘉義縣',
        15: '嘉義市',
        16: '台南市',
        17: '高雄市',
        18: '屏東縣',
        19: '花蓮縣',
        20: '台東縣',
        21: '澎湖縣',
        22: '金門縣',
        23: '連江縣',
      },
      shelterMap: {
        48: '基隆市寵物銀行',
        49: '臺北市動物之家',
        50: '新北市板橋公立動物之家',
        51: '新北市新店區公立動物之家',
        53: '新北市中和區公立動物之家',
        55: '新北市淡水區公立動物之家',
        56: '新北市瑞芳區公立動物之家',
        58: '新北市五股區公立動物之家',
        59: '新北市八里區公立動物之家',
        60: '新北市三芝區公立動物之家',
        61: '桃園市動物保護教育園區',
        62: '新竹市動物收容所',
        63: '新竹縣動物收容所',
        67: '臺中市動物之家南屯園區',
        68: '臺中市動物之家后里園區',
        69: '彰化縣流浪狗中途之家',
        70: '南投縣公立動物收容所',
        71: '嘉義市流浪犬收容中心',
        72: '嘉義縣流浪犬中途之家',
        73: '臺南市動物之家灣裡站',
        74: '臺南市動物之家善化站',
        75: '高雄市壽山動物保護教育園區',
        76: '高雄市燕巢動物保護關愛園區',
        77: '屏東縣流浪動物收容所',
        78: '宜蘭縣流浪動物中途之家',
        79: '花蓮縣流浪犬中途之家',
        80: '台東縣動物收容中心',
        81: '連江縣流浪犬收容中心',
        82: '金門縣動物收容中心',
        83: '澎湖縣流浪動物收容中心',
        89: '雲林縣流浪動物收容所',
        92: '新北市政府動物保護防疫處',
        96: '苗栗縣生態保育教育中心',
      },
      animals: [
        {
          animal_area_pkid: 16, // 縣市 id
          animal_shelter_pkid: 74, // 收容所 id
          animal_place: '臺南市動物之家善化站', // 實際所在地
          animal_kind: '貓',
          animal_sex: 'F',
          animal_bodytype: 'MEDIUM',
          animal_colour: '花色',
          animal_age: 'CHILD',
          animal_sterilization: 'F', // 是否絕育
          animal_bacterin: 'F', // 是否施打狂犬病疫苗
          animal_foundplace: '善化區嘉北里', // 尋獲地
          animal_status: 'OPEN', // 動物狀態，filter OPEN(開放認養)
          animal_remark: '本站動物皆採現場互動面談後評估能否認養 不接受系統上的預約', // 備註
          shelter_name: '臺南市動物之家善化站', // 收容所名稱
          album_file: '', // 圖片
          shelter_address: '臺南市善化區東昌里東勢寮1~19號', // 收容所地址
          shelter_tel: '06-5832399' // 收容所電話
        },
        {
          animal_area_pkid: 20,
          animal_shelter_pkid: 80,
          animal_place: '臺東縣動物收容中心',
          animal_kind: '狗',
          animal_sex: 'M',
          animal_bodytype: 'MEDIUM',
          animal_colour: '虎斑色',
          animal_age: '',
          animal_sterilization: 'F',
          animal_bacterin: 'F',
          animal_foundplace: '池上鄉',
          animal_status: 'OPEN',
          animal_remark: '',
          shelter_name: '臺東縣動物收容中心',
          album_file: 'https://asms.coa.gov.tw/amlapp/upload/pic/afe8dad5-5a99-4324-83ad-b05eaf36ade3_org.JPG',
          shelter_address: '臺東縣臺東市中華路4段999巷600號',
          shelter_tel: '089-362011'
        },
        {
          animal_area_pkid: 20,
          animal_shelter_pkid: 80,
          animal_place: '臺東縣動物收容中心',
          animal_kind: '狗',
          animal_sex: 'M',
          animal_bodytype: 'MEDIUM',
          animal_colour: '黑棕色',
          animal_age: '',
          animal_sterilization: 'F',
          animal_bacterin: 'F',
          animal_foundplace: '池上鄉',
          animal_status: 'OPEN',
          animal_remark: '',
          shelter_name: '臺東縣動物收容中心',
          album_file: 'https://asms.coa.gov.tw/amlapp/upload/pic/ee39f3c6-608b-4f7c-9b1c-3e40dfb02930_org.JPG',
          shelter_address: '臺東縣臺東市中華路4段999巷600號',
          shelter_tel: '089-362011'
        },
        {
          animal_area_pkid: 11,
          animal_shelter_pkid: 69,
          animal_place: '彰化縣流浪狗中途之家',
          animal_kind: '狗',
          animal_sex: 'F',
          animal_bodytype: 'MEDIUM',
          animal_colour: '黑色',
          animal_age: 'CHILD',
          animal_sterilization: 'F',
          animal_bacterin: 'F',
          animal_foundplace: '場內捕捉',
          animal_status: 'OPEN',
          animal_remark: '',
          shelter_name: '彰化縣流浪狗中途之家',
          album_file: 'https://asms.coa.gov.tw/amlapp/upload/pic/d9fe42d0-eb5d-4ca5-b9db-f113238faa70_org.jpg',
          shelter_address: '彰化縣員林市大峯里阿寶巷426號(大門入口請由彰化縣芬園鄉大彰路一段875巷進入走到底)',
          shelter_tel: '04-8590638'
        },
        {
          animal_area_pkid: 20,
          animal_shelter_pkid: 80,
          animal_place: '臺東縣動物收容中心',
          animal_kind: '狗',
          animal_sex: 'F',
          animal_bodytype: 'MEDIUM',
          animal_colour: '黑黃色',
          animal_age: '',
          animal_sterilization: 'F',
          animal_bacterin: 'F',
          animal_foundplace: '池上鄉',
          animal_status: 'OPEN',
          animal_remark: '',
          shelter_name: '臺東縣動物收容中心',
          album_file: 'https://asms.coa.gov.tw/amlapp/upload/pic/cefbefce-3908-4874-b038-198f32df24b0_org.JPG',
          shelter_address: '臺東縣臺東市中華路4段999巷600號',
          shelter_tel: '089-362011'
        }
      ],
    };
  },
  methods: {
    openGoogleMap(shelter) {
      window.open(`https://www.google.com.tw/maps/search/${shelter}`);
    },
  },
};
</script>

<style lang="scss" scope>
.chip-group {
  position: absolute;
  bottom: 0;
  left: 5px;
}

.map-link {
  &:hover {
    text-decoration: underline;
  }
}
</style>
