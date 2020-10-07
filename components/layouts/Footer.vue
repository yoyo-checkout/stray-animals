<template>
  <v-footer
    height="auto"
    dark
    padless
    app
  >
    <v-card
      class="flex"
      flat
    >
      <v-card-title class="teal" />

      <v-card-actions class="grey darken-3 justify-center">
        &copy;{{ new Date().getFullYear() }} -&nbsp;
        <strong>Stray Animals</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
