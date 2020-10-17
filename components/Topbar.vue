<template>
  <div class="container mx-auto mb-4">
    <div class="flex items-center justify-between py-6">
      <NuxtLink to="/">
        <Logo class="h-8 w-auto" />
      </NuxtLink>
      <div class="flex items-center space-x-8 font-bold text-lg text-gray-700">
        <NuxtLink to="/about" class="hover:text-gray-900">About</NuxtLink>
        <NuxtLink to="/uses" class="hover:text-gray-900">Uses</NuxtLink>
      </div>
    </div>
  </div>
</template>
