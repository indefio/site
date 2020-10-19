<template>
  <div class="container mx-auto px-6 mb-4">
    <div class="flex items-center justify-between py-6">
      <NuxtLink to="/">
        <Logo class="h-8 w-auto" />
      </NuxtLink>
      <div
        class="flex items-center space-x-8 font-bold text-lg hidden sm:block"
      >
        <NuxtLink
          to="/about"
          class="text-gray-700 hover:text-gray-900 hover:no-underline"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/uses"
          class="text-gray-700 hover:text-gray-900 hover:no-underline"
        >
          Uses
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-gray-700 hover:text-gray-900 hover:no-underline"
        >
          Contact
        </NuxtLink>
      </div>
      <HamburgerIcon class="w-8 h-8 sm:hidden" @click="openHamburger()" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    openHamburger() {
      this.$store.commit('openHamburger')
    },
  },
})
</script>
