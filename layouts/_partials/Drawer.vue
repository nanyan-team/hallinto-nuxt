<template>
  <!-- v-model="isDrawerShowing" -->
  <v-navigation-drawer app permanent :mini-variant.sync="mini">
    <drawer-user />
    <drawer-route-list />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PartialsDrawer extends Vue {
  @Prop({ type: Boolean, default: true }) readonly isDrawerShowing!: boolean

  get mini() {
    return this.isDrawerShowing
  }

  set mini(value) {
    this.$emit('update:isDrawerShowing', value)
  }
}
</script>
