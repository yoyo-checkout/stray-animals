<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon>
        {{ icon }}
      </v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>
        <template v-if="title">
          {{ title }}
        </template>
        <template v-else>
          <slot name="title" />
        </template>
      </v-list-item-title>
      <v-list-item-subtitle v-if="subTitle">
        {{ subTitle }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list-item {
  &__title,
  &__subtitle {
    white-space: initial;
  }
}
</style>
