<template>
  <div class="container mx-auto">
    <div class="text-center flex flex-col justify-center">
      <h1 class="text-3xl font-extrabold flex items-center justify-center">
        Hello, I'm Patrick
        <img class="w-16 ml-2 mb-2" src="~/assets/man_raising_hand.gif" />
      </h1>
      <h1 class="text-2xl font-bold">
        I love creating web apps with modern technologies
      </h1>
      <HelloIllustration class="w-auto h-64 mt-16" />
    </div>
    <div class="mt-16 border-2 border-gray-500 p-8 rounded-md">
      <div class="text-xl text-center">
        I'm fullstack web engineer living in Central Europe. I'm taking part in
        web development journey for many years and I can see how web is
        transforming. I mostly work with stable Javascript technologies like
        React, Node or Vue but I love to try new stuff which occurs every day.
      </div>
      <div class="mt-4 text-xl text-center">
        I invite you to <NuxtLink to="/">get to know me</NuxtLink> a little
        better and <NuxtLink to="/">reach me out</NuxtLink> to say hello.
      </div>
    </div>
  </div>
</template>
