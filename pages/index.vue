<template>
  <keep-alive>
    <CardList
      v-scroll="handleScroll"
      :animal-list="animals"
    />
  </keep-alive>
</template>

<script>
import { debounce } from 'lodash';
import { mapState, mapActions, mapMutations } from 'vuex';
import CardList from '@/components/index/CardList';

export default {
  layout: 'default',
  components: {
    CardList,
  },
  computed: {
    ...mapState('Global', {
      isLoading: state => state.isLoading,
    }),
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
      'NEXT_PAGE',
    ]),

    handleScroll: debounce(function(e) {
      const { clientHeight, scrollTop, scrollHeight } = e.target.scrollingElement;

      if (!this.isLoading && clientHeight + scrollTop >= scrollHeight) {
        this.NEXT_PAGE();
        this.loadMoreAnimals();
      }
    }, 150),
  },
};
</script>
