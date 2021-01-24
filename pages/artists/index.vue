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
        <template #top>
          <v-btn @click="editing = !editing">
            {{ editing ? 'Cancel Edit' : 'Edit' }}
          </v-btn>
        </template>
        <template #[`item.name`]="{ item }">
          <span v-if="!editing">{{ item.name }}</span>
          <v-text-field
            v-else
            v-model="item.name"
            outlined
            dense
            filled
            hide-details="auto"
          />
        </template>
        <template #expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <img :src="item.imageUrl" :alt="item.name" />
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
  editing: boolean = false
  expanded: any[] = []
  headers = [
    { text: 'No', value: 'id' },
    { text: 'Name', value: 'name' },
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
