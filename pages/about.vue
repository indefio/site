<template>
  <div class="container mx-auto px-6">
    <div class="flex items-center flex-col sm:flex-row">
      <img
        class="w-32 h-32 rounded-full mr-0 border-2 border-gray-300 p-1 sm:mr-8"
        src="~/assets/photo.jpg"
      />
      <div>
        <img class="h-16" src="~/assets/waving_hand.gif" />
        <div class="mt-4 text-xl">
          Hi, I'm Patrick and I'm a fullstack web engineer living in Poland but
          working remotely for international clients (i.a. Microsoft, Aviva,
          Asseco and Predica). I was a member of small startup teams and big
          corporate projects. Here you can find some information about my
          developer profile.
        </div>
        <div class="mt-4 font-semibold flex flex-col sm:flex-row">
          <a
            class="text-gray-700 hover:text-gray-900 hover:no-underline mb-2 sm:mb-0"
            href="https://twitter.com/ignarweb"
            target="_blank"
          >
            Twitter
          </a>
          <span class="mx-2 hidden sm:block">⋅</span>
          <a
            class="text-gray-700 hover:text-gray-900 hover:no-underline mb-2 sm:mb-0"
            href="https://github.com/pgvlas"
            target="_blank"
          >
            Github
          </a>
          <span class="mx-2 hidden sm:block">⋅</span>
          <a
            class="text-gray-700 hover:text-gray-900 hover:no-underline mb-2 sm:mb-0"
            href="https://www.linkedin.com/in/patryk-gu%C5%82a%C5%9B-86ab939a/"
            target="_blank"
          >
            Linkedin
          </a>
          <span class="mx-2 hidden sm:block">⋅</span>
          <a
            class="text-gray-700 hover:text-gray-900 hover:no-underline"
            href="https://www.producthunt.com/@pgulas"
            target="_blank"
          >
            Product Hunt
          </a>
        </div>
      </div>
    </div>
    <div>
      <div class="mt-16">
        <h1 class="text-2xl font-bold text-center">
          Technologies I worked with
        </h1>
        <div class="flex items-center justify-center mt-4 flex-wrap">
          <HtmlLogo class="h-12 w-auto m-6" />
          <CssLogo class="h-12 w-auto m-6" />
          <JavascriptLogo class="h-12 w-auto m-6" />
          <TypescriptLogo class="h-12 w-auto m-6" />
          <ReactLogo class="h-12 w-auto m-6" />
          <AngularLogo class="h-12 w-auto m-6" />
          <VueLogo class="h-12 w-auto m-6" />
          <NuxtLogo class="h-12 w-auto m-6" />
          <NodeLogo class="h-12 w-auto m-6" />
          <MongoLogo class="h-10 w-auto m-6" />
          <ExpressLogo class="h-8 w-auto m-6" />
          <AwsLogo class="h-10 w-auto m-6" />
          <AzureLogo class="h-8 w-auto m-6" />
        </div>
      </div>
    </div>
  </div>
</template>
