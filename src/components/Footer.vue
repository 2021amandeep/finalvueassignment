<template>
  <div>
    <h1>This is footer</h1>
    <template>
      <v-footer dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            This is created by Amandeep Prajapati...Associate Software
            Engineer.... Fission Computer Labs Ltd...Under guidance of Mr.
            rajeshwar...Contact: 8802962004...mail at:
            amandeep.prajapati@fissionlabs.com
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Fission Labs</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </div>
</template>

<script >
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
