<!-- layouts/default.vue -->
<template>
  <div class="dark">
    <header>
      <div class="dark:bg-black text-amber-400 flex w-screen">
        <div class="w-1/2">
          {{ $t('header') }}
        </div>

        <div class="w-1/2">
          <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
          <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
        </div>

      </div>
    </header>
    <main>
      <slot/>
    </main>
    <footer>
      <div class="text-red-300 dark:bg-zinc-700 dark:text-blue-200 dark:font-bold dark:text-center">
        {{ $t('footer') }}
      </div>
    </footer>
  </div>
</template>
<script lang="ts" setup>
</script>