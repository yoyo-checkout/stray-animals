<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-img
            :src="album_file"
            aspect-ratio="1"
            lazy-src="/default-image.png"
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-list>
            <v-list-item>年紀：{{ maps.age[animal_age] }}</v-list-item>
            <v-list-item>縣市：{{ maps.area[animal_area_pkid] }}</v-list-item>
            <v-list-item>是否施打狂犬病疫苗：{{ animal_bacterin }}</v-list-item>
            <v-list-item>體型：{{ maps.bodyType[animal_bodytype] }}</v-list-item>
            <v-list-item>花色：{{ animal_colour }}</v-list-item>
            <v-list-item>尋獲地：{{ animal_foundplace }}</v-list-item>
            <v-list-item>種類：{{ animal_kind }}</v-list-item>
            <v-list-item>實際所在地：{{ animal_place }}</v-list-item>
            <v-list-item>備註：{{ animal_remark }}</v-list-item>
            <v-list-item>性別：{{ maps.sex[animal_sex] }}</v-list-item>
            <v-list-item>收容所：{{ maps.shelter[animal_shelter_pkid] }}</v-list-item>
            <v-list-item>動物狀態：{{ animal_status }}</v-list-item>
            <v-list-item>是否絕育：{{ animal_sterilization }}</v-list-item>
            <v-list-item>收容所地址：{{ shelter_address }}</v-list-item>
            <v-list-item>收容所名稱：{{ shelter_name }}</v-list-item>
            <v-list-item>收容所名稱電話：{{ shelter_tel }}</v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import * as infoMaps from '@/static/infoMaps';

export default {
  layout: 'default',
  async asyncData(context) {
    const animalId = context.route.params.id;
    const { data } = await context.$axios.get(`/api/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_id=${animalId}`);

    console.log(data);
    return data[0];
  },
  data () {
    return {
      maps: { ...infoMaps },
    };
  },
};
</script>

<style lang="scss" scope>
</style>
