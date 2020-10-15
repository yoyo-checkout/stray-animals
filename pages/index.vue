<template>
  <keep-alive>
    <CardList
      v-scroll.self="handleScroll"
      :animal-list="animals"
      class="overflow-y-auto card-list"
    />
  </keep-alive>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import CardList from '@/components/index/CardList';

export default {
  layout: 'default',
  components: {
    CardList,
  },
  computed: {
    ...mapState('Index', {
      animals: state => state.animals,
      page: state => state.page,
    }),
  },
  created() {
    if (!this.animals.length) {
      this.getAnimals();
    }
  },
  methods: {
    ...mapActions('Index', [
      'getAnimals',
      'loadMoreAnimals',
    ]),
    ...mapMutations('Index', [
      'nextPage',
    ]),

    handleScroll({ target: { clientHeight, scrollTop, scrollHeight } }) {
      if (clientHeight + scrollTop >= scrollHeight) {
        this.nextPage();
        this.loadMoreAnimals();
      }
    },
  },
};
</script>

<style scoped>
.card-list {
  max-height: calc(100vh - 56px);
}
</style>
