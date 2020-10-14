<template>
  <CardList :animal-list="animals" />
</template>

<script>
import CardList from '@/components/index/CardList';

export default {
  layout: 'default',
  components: {
    CardList,
  },
  async asyncData(context) {
    // TODO: keep alive
    const { data } = await context.$axios.get('/api/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=20&animal_status=OPEN');

    console.log(data);
    return {
      animals: data,
    };
  },
};
</script>

<style lang="scss">
</style>
