<template>
  <v-navigation-drawer
    v-model="isDrawerShowing"
    app
    permanent
    :mini-variant.sync="mini"
  >
    <drawer-user />
    <v-list dense>
      <v-list-item link @click.stop="mini = !mini">
        <v-list-item-icon>
          <v-icon>mdi-arrow-expand-right</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Expand</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <drawer-route-list />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PartialsDrawer extends Vue {
  @Prop({ type: Boolean, default: true }) readonly isDrawerShowing!: boolean

  mini: boolean = true
}
</script>
