<template>
  <v-app>
    <app-bar @nav-icon-click="isDrawerShowing = !isDrawerShowing" />
    <drawer :is-drawer-showing.sync="isDrawerShowing" />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AppBar from './_partials/AppBar.vue'
import Drawer from './_partials/Drawer.vue'

@Component({
  components: {
    AppBar,
    Drawer,
  },
})
export default class DashboardLayout extends Vue {
  isDrawerShowing = false
}
</script>
