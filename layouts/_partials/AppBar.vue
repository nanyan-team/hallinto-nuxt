<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon @click.stop="$emit('nav-icon-click')" />
    <v-toolbar-title>Nanyan Hallinto</v-toolbar-title>
    <v-spacer />
    <v-switch
      v-model="$vuetify.theme.dark"
      inset
      label="Theme"
      color="white"
      hide-details="auto"
    />
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class PartialsAppBar extends Vue {}
</script>
