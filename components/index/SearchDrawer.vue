<template>
  <v-navigation-drawer
    :value="isSearchDrawerOpen"
    width="100%"
    absolute
    app
    stateless
    temporary
  >
    this is search drawer
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('Global', {
      isSearchDrawerOpen: state => state.isSearchDrawerOpen,
    }),
  },
};
</script>
