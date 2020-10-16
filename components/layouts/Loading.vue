<template>
  <div class="loading-wrapper">
    <v-progress-circular
      :size="50"
      :width="5"
      class="spinner"
      color="amber"
      indeterminate
    />
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
}
</style>
