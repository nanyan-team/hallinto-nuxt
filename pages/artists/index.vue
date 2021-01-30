<template>
  <v-row align="center" justify="center">
    <v-col cols="10">
      <v-data-table
        :headers="headers"
        :items="artists"
        :items-per-page="10"
        :expanded.sync="expanded"
        single-expand
        show-expand
        item-key="name"
      >
        <template #[`item.imageUrl`]="{ item }">
          <v-avatar>
            <v-img
              :src="item.imageUrl"
              max-height="80"
              max-width="80"
              aspect-ratio="1/1"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-avatar>
        </template>
        <template #[`item.actions`]="{ item }">
          <v-btn icon link nuxt :to="`/artists/${item.id}`">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="deleteItem(item)">
            <v-icon small>mdi-delete</v-icon>
          </v-btn>
        </template>
        <template #expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            {{ item.description }}
          </td>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Artist from '@/vuex-orm/models/Artist'

const dummyArtists = [
  {
    id: 1,
    name: 'Thae Oo Thazin',
    imageUrl: 'https://via.placeholder.com/100',
    description: 'Ma Thae Oo description.',
  },
  {
    id: 2,
    name: 'Do Shine',
    imageUrl: 'https://via.placeholder.com/100',
    description: 'Do Shine description.',
  },
  {
    id: 3,
    name: 'Ma Chan',
    imageUrl: 'https://via.placeholder.com/100',
    description: 'Ma Chan description.',
  },
]

@Component({
  layout: 'dashboard',
})
export default class PagesArtists extends Vue {
  expanded: any[] = []
  headers = [
    { text: '', value: 'imageUrl' },
    { text: 'Name', value: 'name' },
    { text: 'Actions', value: 'actions' },
  ]

  get artists() {
    return Artist.all()
  }

  mounted() {
    Artist.deleteAll()
    Artist.insert({
      data: dummyArtists,
    })
  }
}
</script>
