<template>
  <v-form v-model="valid" @submit.prevent>
    <v-row>
      <v-col cols="2">
        <v-avatar size="100">
          <v-img :src="artist.imageUrl"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="3">
        <v-file-input
          :rules="imageInputRules"
          label="Artist Profile Photo"
          accpet="image/png, image/jpeg, image/jpg"
          counter
          show-size
          small-chips
          outlined
          truncate-length="10"
          prepend-icon=""
          prepend-inner-icon="mdi-camera"
        ></v-file-input>
      </v-col>
      <!-- <v-col cols=""></v-col> -->
    </v-row>
    <v-row class="mt-4">
      <v-col cols="4">
        <v-text-field
          v-model="artist.name"
          label="Artist's Name"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="artist.description"
          label="Artist's Description"
          outlined
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn elevation="0" outlined color="secondary" type="submit">
          Save
        </v-btn>
        <v-btn
          elevation="0"
          outlined
          :color="$vuetify.theme.dark ? 'white' : 'grey darken-3'"
          @click="artist = artistBeforeEdit"
        >
          Cancel
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Artist from '@/vuex-orm/models/Artist'

@Component
export default class ArtistsUpdateForm extends Vue {
  @Prop({ type: String, default: '', required: true })
  readonly artistId!: string

  get artistBeforeEdit() {
    return Artist.query().where('id', this.artistId).first()
  }

  artist: unknown = {
    id: '',
    name: '',
    imageUrl: '',
    description: '',
  }

  mounted() {
    this.artist = { ...this.artistBeforeEdit }
  }

  valid: boolean = false
  imageInputRules = [
    (value: File) =>
      !value || value.size < 2000000 || 'Photo size should be less than 2MB!',
  ]
}
</script>
