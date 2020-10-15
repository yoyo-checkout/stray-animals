<template>
  <keep-alive>
    <CardList
      v-scroll="handleScroll"
      :animal-list="animals"
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

    handleScroll({ target: { scrollingElement: { clientHeight, scrollTop, scrollHeight } } }) {
      if (clientHeight + scrollTop >= scrollHeight) {
        this.nextPage();
        this.loadMoreAnimals();
      }
    },
  },
};
</script>
