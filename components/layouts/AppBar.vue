<template>
  <v-app-bar
    color="blue darken-2"
    app
    dark
    elevate-on-scroll
  >
    <v-img
      slot="img"
      v-bind="logoProps"
      contain
    />

    <v-spacer />

    <v-btn
      v-if="!isSearchDrawerOpen"
      icon
      @click.stop="openSearch"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn
      v-else
      icon
      @click.stop="closeSearch"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      logoProps: {
        height: '100%',
        src: '/logo.png',
      },
    };
  },
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
