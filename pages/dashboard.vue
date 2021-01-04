<template>
  <v-row align="center" justify="center">
    <v-col>{{ message }} {{ user }}</v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import User from '@/vuex-orm/models/User'

@Component({
  layout: 'dashboard',
})
export default class PagesDashboard extends Vue {
  message = 'Hello'

  get user() {
    return User.find('$uid1')?.name
  }

  mounted() {
    User.insert({ data: { name: 'John Doe' } })
  }
}
</script>
