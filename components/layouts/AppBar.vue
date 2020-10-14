<template>
  <v-app-bar
    color="blue darken-2"
    height="56px"
    app
    dark
    elevate-on-scroll
  >
    <v-img
      slot="img"
      v-bind="logoProps"
      contain
    />

    <v-btn
      v-if="isBackVisible"
      icon
      @click="goBack"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-spacer />

    <v-btn
      v-if="!isSearchDrawerOpen"
      icon
      @click="openSearch"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn
      v-else
      icon
      @click="closeSearch"
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

    isBackVisible() {
      return !this.isSearchDrawerOpen && this.$route.name !== 'index';
    },
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
    goBack() {
      this.$router.back();
    },
  },
};
</script>
