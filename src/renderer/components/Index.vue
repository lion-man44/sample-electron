<template lang="pug">
  main
    ul
      li(v-for="u in users")
        | {{ u.name }} & {{ u.role }}
    div
      label 名前
      input(type="text", v-model="user.name")
      label 役職
      input(type="text", v-model="user.role")
      input(type="button", value="保存", @click="submit")
      input(type="button", value="CSV", @click="download")
    router-link(to="register")
      | Register View
</template>

<script>
  import json2csv from '@/../module/Json2csv.vue';
  export default {
    name: 'index',
    mixins: [json2csv],
    data() {
      return {
        user: {
          name: '',
          role: '',
        },
        users: [],
      };
    },
    created() {
      this.$db.users.find({}, (err, docs) => {
        this.users = docs;
      });
    },
    methods: {
      submit() {
        this.$db.users.insert(this.user, (err, docs) => {
          if (err) window.alert(err);
          this.users.push(docs);
        });
      },
      async download() {
        const d = await this.$_parse(this.users);
        console.log(d);
      },
    },
  };
</script>

<style scoped>
  main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>