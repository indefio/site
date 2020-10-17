<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-between py-6">
      <NuxtLink to="/">
        <Logo class="h-8" />
      </NuxtLink>
      <div class="flex items-center space-x-8 font-bold text-lg text-gray-700">
        <Moon class="w-6 cursor-pointer hover:text-gray-900" />
        <NuxtLink to="/about" class="hover:text-gray-900">About</NuxtLink>
        <NuxtLink to="/uses" class="hover:text-gray-900">Uses</NuxtLink>
      </div>
    </div>
  </div>
</template>
