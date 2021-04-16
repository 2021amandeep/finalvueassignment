<template>
  <div>
    <h1>Userdetails</h1>

    <div>
      <v-simple-table dark>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Phone Number</th>
              <th class="text-left">Email Id</th>
              <th class="text-left">Date of birth</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in details" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.phonenumber }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.dateofbirth }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script >
import {mapState} from 'vuex';
export default {
  name: "Userdetails",
  computed: {
    ...mapState([
        'details'
    ])
  },
};
</script>
<style scoped>
</style>
