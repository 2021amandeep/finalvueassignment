<template>
  <div>
    <div>
      <div><Sidemenu /></div>

      <div class="main">
        <Header />
        <div>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Number</th>
                  <th class="text-left">username</th>
                  <th class="text-left">email</th>
                  <th class="text-left">address</th>
                  <th class="text-left">phone</th>
                  <th class="text-left">website</th>
                  <th class="text-left">company</th>
                  <th class="text-left">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.address }}</td>
                  <td>{{ user.phone }}</td>
                  <td>{{ user.website }}</td>
                  <td>{{ user.company }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
        <Footer />
      </div>
    </div>
    <!-- <button v-on:click="storeData">Store Data</button> -->
    <router-view></router-view>
  </div>
</template>

<script >
import Header from "./Header.vue";
import Sidemenu from "./Sidemenu.vue";
import Footer from "./Footer.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import { mapActions, mapGetters } from 'vuex';

Vue.use(VueAxios, axios);

export default {
  name: "Home",
  components: {
    Header,
    Sidemenu,
    Footer,
  },
  data() {
    return { users: [] };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // ...mapActions(['setUsersAction']),
    async getData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.users = response.data;
        this.$store.state.users = response.data;
      } catch (error) {
        window.console.error(error);
      }
    },
  },
  // components: {
  //   Header,
  //   Sidemenu,
  //   Footer,
  // },
  // data() {
  //   return { listOfUsers: undefined };
  // },
  // mounted() {
  //   Vue.axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
  //     this.listOfUsers = resp.data;
  //     this.$store.state.users = resp.data;
  //     console.warn(resp);
  //   });
  // },
  // methods:{
  //   // storeData:function(){
  //   //   this.$store.commit('storeDetails');
  //   // }
  // }
};
</script>
<style scoped>
* {
  margin-top: 0;
}
.main {
  margin-left: 160px;
  padding: 0px 10px;
}
</style>
