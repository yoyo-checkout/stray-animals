<template>
  <keep-alive>
    <CardList :animal-list="animals" />
  </keep-alive>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CardList from '@/components/index/CardList';

export default {
  layout: 'default',
  components: {
    CardList,
  },
  computed: {
    ...mapState('Index', {
      animals: state => state.animals,
    }),
  },
  created() {
    this.getAnimals();
  },
  methods: {
    ...mapActions('Index', [
      'getAnimals',
    ]),
  },
};
</script>

<style lang="scss">
</style>
