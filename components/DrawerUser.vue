<template>
  <v-list>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://via.placeholder.com/50" />
      </v-list-item-avatar>
    </v-list-item>

    <v-menu v-model="menu" offset-y>
      <template #activator="{ on, attrs }">
        <v-list-item v-bind="attrs" v-on="on">
          <v-list-item-content>
            <v-list-item-title> {{ user.displayName }} </v-list-item-title>
            <v-list-item-subtitle> {{ user.email }} </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </template>

      <v-list dense>
        <v-list-item link @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { auth } from '@/lib/business-layer'

const user = {
  displayName: '',
  email: '',
}

@Component
export default class UserDrawer extends Vue {
  menu = false

  get user() {
    return auth.getCurrentUser() || user
  }

  logout() {
    auth.signOut().then(() => this.$router.push('/'))
  }
}
</script>
