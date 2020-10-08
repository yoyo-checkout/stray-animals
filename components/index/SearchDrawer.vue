<template>
  <v-navigation-drawer
    :value="isSearchDrawerOpen"
    width="100%"
    absolute
    temporary
    app
    @input="closeDrawer"
  >
    this is search drawer
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState('Global', {
      isSearchDrawerOpen: state => state.isSearchDrawerOpen,
    }),
  },
  methods: {
    ...mapMutations({
      closeSearchDrawer: 'Global/closeSearchDrawer',
    }),

    closeDrawer(isOpening) {
      if (!isOpening) this.closeSearchDrawer();
    },
  },
};
</script>
