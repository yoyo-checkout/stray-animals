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
        <strong>浪浪回家</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
