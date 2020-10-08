<template>
  <v-app-bar
    color="blue darken-2"
    dark
    elevate-on-scroll
    app
  >
    <v-app-bar-nav-icon />

    <v-toolbar-title>Stray Animals</v-toolbar-title>

    <v-spacer />

    <v-btn v-if="!isSearchDrawerOpen" icon @click.stop="openSearch">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn v-else icon @click.stop="closeSearch">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-app-bar>
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
      openSearchDrawer: 'Global/openSearchDrawer',
      closeSearchDrawer: 'Global/closeSearchDrawer',
    }),

    openSearch() {
      this.openSearchDrawer();
    },
    closeSearch() {
      this.closeSearchDrawer();
    },
  },
};
</script>
