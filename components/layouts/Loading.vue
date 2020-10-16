<template>
  <div class="loading-wrapper">
    <v-icon class="spinner" size="72">
      mdi-loading
    </v-icon>
  </div>
</template>

<style lang="scss" scoped>
.loading-wrapper {
  position: fixed;
  top: 56px;
  right: 0;
  bottom: 72px;
  left: 0;
  background-color: #21212175;
  z-index: 5;
}

.spinner {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: loading 1s infinite;

  @keyframes loading {
    from {
      transform: translate(-50%, -50%) rotate(0);
    }

    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
}
</style>
