<template>
  <v-list dense>
    <v-subheader>PRODUCTS</v-subheader>
    <v-list-item-group v-model="selectedProductsRoute">
      <v-list-item
        v-for="(route, i) in productsRoutes"
        :key="`products-route-${i}`"
      >
        <v-list-item-icon>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ route.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>

    <v-subheader>ARTISTS</v-subheader>
    <v-list-item-group v-model="selectedArtistsRoute">
      <v-list-item
        v-for="(route, i) in artistsRoutes"
        :key="`artists-route-${i}`"
      >
        <v-list-item-icon>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ route.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DrawerRouteList extends Vue {
  selectedProductsRoute: number | null = null
  productsRoutes = [
    { title: 'Inventory', icon: 'mdi-package-variant' },
    { title: 'Suppliers', icon: 'mdi-factory' },
  ]

  selectedArtistsRoute: number | null = null
  artistsRoutes = [
    { title: 'Artists', icon: 'mdi-account-music' },
    { title: 'Deals', icon: 'mdi-handshake' },
  ]
}
</script>
