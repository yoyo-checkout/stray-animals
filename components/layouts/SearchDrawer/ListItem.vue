<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>
        {{ title }}
      </v-list-item-title>
      <v-list-item-subtitle>
        <v-chip-group
          v-model="data.selected"
          :column="data.isMultiLine"
          mandatory
        >
          <v-chip
            active-class="amber"
            value="all"
          >
            全部
          </v-chip>

          <v-chip
            v-for="(chip, i) in data.chips"
            :key="i"
            :value="chip.value"
            active-class="amber"
          >
            {{ chip.label }}
          </v-chip>
        </v-chip-group>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    column: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
