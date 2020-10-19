<template>
  <div class="relative">
    <HamburgerSidebar
      class="h-0"
      :class="{
        'h-full': $store.state.isHamburgerOpened,
      }"
    />
    <Topbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-gray-100',
    },
  },
}
</script>
