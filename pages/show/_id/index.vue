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
            <v-list-item v-if="animal_sex !== 'N'">
              <v-list-item-icon>
                <v-icon>
                  mdi-human-male-female
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ maps.sex[animal_sex] }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- 年紀 -->
            <v-list-item>
              <v-list-item-icon>
                <v-icon>
                  mdi-paw
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ maps.age[animal_age] }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- 體型 -->
            <v-list-item>
              <v-list-item-icon>
                <v-icon>
                  mdi-paw
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ maps.bodyType[animal_bodytype] }}</v-list-item-title>
                <v-list-item-subtitle>體型</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- 花色 -->
            <v-list-item>
              <v-list-item-icon>
                <v-icon>
                  mdi-paw
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ animal_colour }}</v-list-item-title>
                <v-list-item-subtitle>花色</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- 疫苗 -->
            <v-list-item v-if="animal_bacterin !== 'N'">
              <v-list-item-icon>
                <v-icon>
                  mdi-needle
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ maps.bacterin[animal_bacterin] }}</v-list-item-title>
                <v-list-item-subtitle>狂犬病疫苗</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- 絕育 -->
            <v-list-item v-if="animal_sterilization !== 'N'">
              <v-list-item-icon>
                <v-icon>
                  mdi-paw-off
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ maps.sterilization[animal_sterilization] }}</v-list-item-title>
                <v-list-item-subtitle>絕育</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- 備註 -->
            <v-list-item v-if="animal_remark !== ''">
              <v-list-item-icon>
                <v-icon>
                  mdi-message-bulleted
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ animal_remark }}</v-list-item-title>
                <v-list-item-subtitle>備註</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset />

            <!-- 收容所 -->
            <v-list-item>
              <v-list-item-icon>
                <v-icon>
                  mdi-home
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>
                  <a
                    :href="`https://www.google.com.tw/maps/search/${maps.shelter[animal_shelter_pkid]}`"
                    target="_blank"
                  >
                    {{ maps.shelter[animal_shelter_pkid] }}
                  </a>
                </v-list-item-title>
                <v-list-item-subtitle>{{ shelter_address }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- 電話 -->
            <v-list-item>
              <v-list-item-icon>
                <v-icon>
                  mdi-phone
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>
                  <a :href="`tel:${shelter_tel}`">{{ shelter_tel }}</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
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
