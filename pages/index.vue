<template>
  <keep-alive>
    <CardList
      v-if="animals.length"
      v-scroll="handleScroll"
      :animal-list="animals"
    />
    <div
      v-else-if="!isLoading"
      class="text-h6"
      align="center"
    >
      查無資料
    </div>
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
      isSearchDrawerOpen: state => state.isSearchDrawerOpen,
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
      'SET_PAGE',
    ]),

    handleScroll: debounce(function(e) {
      const { clientHeight, scrollTop, scrollHeight } = e.target.scrollingElement;

      if (
        !this.isLoading &&
        !this.isSearchDrawerOpen &&
        clientHeight + scrollTop >= scrollHeight
      ) {
        this.SET_PAGE(this.page + 1);
        this.loadMoreAnimals();
      }
    }, 100),
  },
};
</script>
