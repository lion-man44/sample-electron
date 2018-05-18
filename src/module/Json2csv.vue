<template>
  
</template>

<script>
  export default {
    name: 'json2csv',
    data() {
      return {
        $_jsonParser: require('json2csv').parse,
      };
    },
    methods: {
      async $_parse(fields, options = {}) {
        try {
          const csv = await this.$data.$_jsonParser(fields, options);
          return csv;
        } catch (e) {
          return null;
        }
      },
    },
  };
</script>

<style scoped>

</style>