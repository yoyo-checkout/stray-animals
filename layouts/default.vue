<template>
  <v-app>
    <AppBar />

    <!-- Sizes your content based upon application components -->
    <v-main>
      main

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      footer
    </v-footer>

    <v-bottom-navigation app>
      bottom-navigation
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import AppBar from '@/components/layouts/AppBar.vue';

export default {
  components: {
    AppBar,
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
</style>
