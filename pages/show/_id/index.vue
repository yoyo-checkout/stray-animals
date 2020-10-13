<template>
  <div>
    this is show page
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
    };
  },
  created() {
    this.fetchTest();
  },
  methods: {
    async fetchTest() {
      const animalId = this.$route.params.id;
      const data = await this.$axios.get(`/api/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_id=${animalId}`);

      console.log(data);
    },
  },
};
</script>

<style lang="scss" scope>
</style>
