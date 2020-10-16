<template>
  <v-card
    :to="{ path: `/show/${animalData.animal_id}` }"
    hover
    nuxt
  >
    <v-img
      :src="animalData.album_file"
      aspect-ratio="1"
    >
      <template v-slot:placeholder>
        <v-img src="/default-image.png" />
      </template>
      <v-chip-group class="chip-group">
        <v-chip v-if="animalData.animal_sex === 'F'" color="pink lighten-4">
          {{ maps.sex[animalData.animal_sex] }}
        </v-chip>
        <v-chip v-if="animalData.animal_sex === 'M'" color="blue lighten-4">
          {{ maps.sex[animalData.animal_sex] }}
        </v-chip>
        <v-chip v-if="animalData.animal_bodytype" color="teal lighten-4">
          {{ maps.bodyType[animalData.animal_bodytype] }}
        </v-chip>
        <v-chip v-if="animalData.animal_age" color="brown lighten-4">
          {{ maps.age[animalData.animal_age] }}
        </v-chip>
        <v-chip v-if="animalData.animal_colour" color="grey lighten-2">
          {{ animalData.animal_colour }}
        </v-chip>
      </v-chip-group>
    </v-img>

    <v-card-text>
      <div class="d-flex align-center">
        <v-icon>mdi-map-marker</v-icon>
        <span
          class="blue--text map-link"
          @click.prevent="openGoogleMap(animalData.shelter_name)"
        >
          {{ maps.area[animalData.animal_area_pkid] }}
        </span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import * as infoMaps from '@/static/infoMaps';

export default {
  props: {
    animalData: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      maps: { ...infoMaps },
    };
  },
  methods: {
    openGoogleMap(shelter) {
      window.open(`https://www.google.com.tw/maps/search/${shelter}`);
    },
  },
};
</script>

<style lang="scss" scoped>
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
