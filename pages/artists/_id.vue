<template>
  <v-container>
    <v-row>
      <v-col>
        <artists-update-form :artist-id="$route.params.id" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  layout: 'dashboard',
})
export default class PagesArtistsId extends Vue {}
</script>
