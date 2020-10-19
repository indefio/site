<template>
  <div
    class="fixed bg-gray-100 top-0 right-0 bottom-0 left-0 overflow-hidden transition-all duration-200 ease-in-out"
  >
    <div class="container mx-auto px-6 mb-4">
      <div class="flex items-center justify-between py-6">
        <NuxtLink to="/">
          <Logo class="h-8 w-auto" />
        </NuxtLink>
        <CloseIcon class="w-8 h-8" @click="closeHamburger()" />
      </div>
    </div>
    <div class="px-6 pb-6 text-xl">
      <NuxtLink
        class="block mb-2 text-gray-700 hover:text-gray-900 hover:no-underline"
        to="/about"
        @click.native="closeHamburger()"
      >
        About
      </NuxtLink>
      <NuxtLink
        class="block mb-2 text-gray-700 hover:text-gray-900 hover:no-underline"
        to="/uses"
        @click.native="closeHamburger()"
      >
        Uses
      </NuxtLink>
      <NuxtLink
        class="block text-gray-700 hover:text-gray-900 hover:no-underline"
        to="/contact"
        @click.native="closeHamburger()"
      >
        Contact
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    closeHamburger() {
      this.$store.commit('closeHamburger')
    },
  },
})
</script>
