<template>
  <v-app>
    <AppBar />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <Loading v-show="isLoading" />
        <Nuxt />
      </v-container>
    </v-main>

    <SearchDrawer />

    <Footer />
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import AppBar from '@/components/layouts/AppBar';
import Footer from '@/components/layouts/Footer';
import Loading from '@/components/layouts/Loading';
import SearchDrawer from '@/components/layouts/SearchDrawer';

export default {
  components: {
    AppBar,
    Footer,
    Loading,
    SearchDrawer,
  },
  computed: {
    ...mapState('Global', {
      isLoading: state => state.isLoading,
    }),
  },
};
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.v-main__wrap {
  background-color: #FFF8E1;
}
</style>
