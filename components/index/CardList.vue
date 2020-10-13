<template>
  <v-row no-gutters>
    <v-col
      v-for="(animal, index) in animalList"
      :key="index"
      cols="6"
      md="4"
      lg="3"
      class="pa-3"
    >
      <CardItem :animal-data="animal" />
    </v-col>
  </v-row>
</template>

<script>
import CardItem from '@/components/index/CardItem';

export default {
  components: {
    CardItem,
  },
  props: {
    animalList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
</style>
