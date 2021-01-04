<template>
  <v-form v-model="valid" style="padding-top: 10vh" @submit.prevent="signIn">
    <v-row justify="center" align="center" style="margin-bottom: 20px">
      <v-img
        max-width="100"
        :src="require('~/assets/images/favicon-512.png')"
        :aspect-ratio="1 / 1"
      />
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="4" align="center">
        <v-text-field
          v-model="email.value"
          label="Email"
          :rules="email.rules"
          type="email"
          required
        />
        <v-text-field
          v-model="password.value"
          label="Password"
          :rules="password.rules"
          type="password"
          required
        />
        <v-btn
          type="submit"
          elevation="0"
          outlined
          color="primary"
          :loading="processing"
          :disabled="processing"
        >
          Login
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import '@/lib/firebase'
import { Vue, Component } from 'vue-property-decorator'
import isEmail from 'validator/lib/isEmail'

import { auth } from '@/lib/business-layer'

@Component
export default class PagesIndex extends Vue {
  mounted() {
    if (auth.getCurrentUser() !== null) this.$router.replace('/dashboard')
  }

  valid = false

  email = {
    value: '',
    rules: [
      (v: string) => !!v || 'Email is required!',
      (v: string) => isEmail(v) || 'Please enter the correct email format.',
    ],
  }

  password = {
    value: '',
    rules: [
      (v: string) => !!v || 'Password is required!',
      (v: string) => v.length > 5 || 'Password must be at least 6 characters.',
      (v: string) =>
        v.length < 21 || 'Password must not be longer than 20 characters.',
    ],
  }

  processing = false

  async signIn() {
    this.processing = true

    const isSignedIn = await auth
      .signInWithEmailAndPassword(this.email.value, this.password.value)
      .catch((e) => e)

    if (isSignedIn instanceof Error) this.processing = false

    this.processing = false
    this.$router.push('/dashboard')
  }
}
</script>
