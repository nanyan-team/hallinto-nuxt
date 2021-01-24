<template>
  <v-list dense>
    <div v-for="(item, itemIdx) in menuList" :key="`item-${itemIdx}`">
      <v-subheader>{{ item.section.toUpperCase() }}</v-subheader>

      <v-list-item-group>
        <v-list-item
          v-for="(route, i) in item.routes"
          :key="`products-route-${i}`"
          color="orange"
          link
          nuxt
          :to="route.path"
        >
          <v-list-item-icon>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </div>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DrawerRouteList extends Vue {
  menuList = [
    {
      section: 'Main',
      routes: [
        { title: 'Dashboard', icon: 'mdi-package-variant', path: '/dashboard' },
      ],
    },
    {
      section: 'Products',
      routes: [
        { title: 'Inventory', icon: 'mdi-package-variant', path: '/inventory' },
        { title: 'Suppliers', icon: 'mdi-factory', path: '/suppliers' },
      ],
    },
    {
      section: 'Artists',
      routes: [
        { title: 'Artists', icon: 'mdi-account-music', path: '/artists' },
        { title: 'Deals', icon: 'mdi-handshake', path: '/deals' },
      ],
    },
  ]
}
</script>
