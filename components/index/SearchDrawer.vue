<template>
  <v-navigation-drawer
    :value="isSearchDrawerOpen"
    width="100%"
    height="calc(100vh - 56px)"
    overlay-color="transparent"
    overlay-opacity="1"
    app
    fixed
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

<style lang="scss" scope>
.v {
  &-navigation-drawer {
    top: 56px !important;
  }

  &-overlay {
    z-index: 0 !important;
  }
}
</style>
