<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>
        {{ title }}
      </v-list-item-title>
      <v-list-item-subtitle>
        <v-chip-group v-model="allVal">
          <v-chip
            active-class="amber"
            value="all"
            @click="toggleAll"
          >
            全部
          </v-chip>
        </v-chip-group>

        <v-chip-group
          v-model="data.selected"
          :column="data.isMultiLine"
          multiple
          @change="updateChips"
        >
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
  data() {
    return {
      isAll: true,
    };
  },
  computed: {
    allVal: {
      get() {
        return this.isAll ? 'all' : '';
      },
      set(val) {
        return val;
      },
    },
  },
  methods: {
    toggleAll() {
      this.isAll = !this.isAll;
      this.data.selected = this.isAll ? this.data.chips.map(chip => chip.value) : [];
    },
    updateChips(chosenChips) {
      this.isAll = chosenChips.length === this.data.chips.length;
    },
  },
};
</script>
