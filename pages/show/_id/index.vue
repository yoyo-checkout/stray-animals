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
            <!-- 性別 -->
            <ListItem
              v-if="animal_sex !== 'N'"
              :title="maps.sex[animal_sex]"
              icon="mdi-human-male-female"
            />

            <!-- 年紀 -->
            <ListItem
              :title="maps.age[animal_age]"
              icon="mdi-paw"
            />

            <!-- 體型 -->
            <ListItem
              :title="maps.bodyType[animal_bodytype]"
              icon="mdi-paw"
              sub-title="體型"
            />

            <!-- 花色 -->
            <ListItem
              :title="animal_colour"
              icon="mdi-paw"
              sub-title="花色"
            />

            <!-- 疫苗 -->
            <ListItem
              v-if="animal_bacterin !== 'N'"
              :title="maps.bacterin[animal_bacterin]"
              icon="mdi-needle"
              sub-title="狂犬病疫苗"
            />

            <!-- 絕育 -->
            <ListItem
              v-if="animal_sterilization !== 'N'"
              :title="maps.sterilization[animal_sterilization]"
              icon="mdi-paw-off"
              sub-title="絕育"
            />

            <!-- 備註 -->
            <ListItem
              v-if="animal_remark !== ''"
              :title="animal_remark"
              icon="mdi-message-bulleted"
              sub-title="備註"
            />

            <v-divider inset />

            <!-- 收容所 -->
            <ListItem
              icon="mdi-home"
              :sub-title="shelter_address"
            >
              <template v-slot:title>
                <a
                  :href="`https://www.google.com.tw/maps/search/${maps.shelter[animal_shelter_pkid]}`"
                  target="_blank"
                >
                  {{ maps.shelter[animal_shelter_pkid] }}
                </a>
              </template>
            </ListItem>

            <!-- 電話 -->
            <ListItem icon="mdi-phone">
              <template v-slot:title>
                <a :href="`tel:${shelter_tel}`">{{ shelter_tel }}</a>
              </template>
            </ListItem>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import * as infoMaps from '@/static/infoMaps';
import ListItem from '@/components/show/ListItem';

export default {
  layout: 'default',
  components: {
    ListItem,
  },
  async asyncData(context) {
    const animalId = context.route.params.id;
    const { data } = await context.$axios.get(`/api/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_id=${animalId}`);

    return data[0];
  },
  data () {
    return {
      maps: { ...infoMaps },
    };
  },
};
</script>

<style scoped>
>>> .v-list-item__subtitle {
  white-space: initial;
}
</style>
