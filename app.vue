<template>
  <div>
    <NuxtLayout :name=layout>
      <index/>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import Index from "~/pages/index.vue";

const layout = "default";
</script>